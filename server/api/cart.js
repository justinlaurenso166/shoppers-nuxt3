import Cart from "../models/Cart";
import Products from "../models/Products"
import db from "../index"

export default defineEventHandler(async(event) => {
    await db();
    const req = event.node.req;
    const res = event.node.res;
    const query = getQuery(event);

    const stringify = (payload) => {
        return JSON.stringify(payload);
    }

    let response = {
        message: 'The request has been processed successfully on the server',
        data: [],
    }

    let err = {
        error: "",
    }

    if (req.method == "GET") {
        const cart = await Cart.aggregate([
            { "$addFields": { "product_id": { "$toObjectId": "$product_id" } } },
            {
                $lookup: {
                    from: Products.collection.name,
                    localField: "product_id",
                    foreignField: "_id",
                    as: "product"
                }
            },
            { $unwind: { "path": "$product", "preserveNullAndEmptyArrays": true } },
        ]).exec()

        response.data = cart;
        res.writeHead(200).end(stringify(response))

    } else if (req.method == "POST") {
        const data = await readBody(event)
        const id = data.product_id

        const checkProduct = await Cart.aggregate([{
            $match: { $and: [{ product_id: id }, { size: data.size }] }
        }])

        if (checkProduct.length !== 0) {
            console.log("Same item found")
            const item = checkProduct[0];
            item.qty = item.qty += data.qty;
            item.total = item.qty * item.price

            const updateSameProduct = await Cart.updateOne({
                _id: item._id
            }, { $set: { qty: item.qty, total: item.total } })

            if (updateSameProduct.modifiedCount == 1) {
                response.message = "Item added to cart"
                res.writeHead(200).end(stringify(response))
            } else {
                console.log("Error")
                err.error = "No data found and not updated"
                res.writeHead(404).end(stringify(err))
            }

        } else {
            console.log("No same item found")
            const add_cart = await new Cart(data).save();

            if (add_cart) {
                response.data = add_cart
                response.message = "Item added to cart"
                res.writeHead(200).end(stringify(response))
            }
        }
    } else if (req.method == "DELETE") {
        const id = query._id;

        const delete_item = await Cart.remove({ _id: id })

        if (delete_item.deletedCount == 1) {
            response.message = "Success remove item from cart"
            res.writeHead(200).end(stringify(response))
        }
    } else if (req.method == "PUT") {
        const data = await readBody(event)

        data.total = data.qty * data.price;

        const updateItem = await Cart.updateOne({
            _id: data._id
        }, { $set: { qty: data.qty, total: data.total } })

        if (updateItem.modifiedCount == 1 || updateItem.matchedCount == 1) {
            response.message = "Cart updated"
            res.writeHead(200).end(stringify(response))
        } else {
            console.log("Error")
            err.error = "No data found and not updated"
            res.writeHead(404).end(stringify(err))
        }
    } else {
        response.message = "The endpoint only accept GET methods"
        res.writeHead(405).end(stringify(response))
    }
})