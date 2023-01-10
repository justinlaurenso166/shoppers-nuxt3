import Cart from "./models/Cart";
import Products from "./models/Products"

export default defineEventHandler(async(event) => {
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

        const add_cart = await new Cart(data).save();

        if (add_cart) {
            response.data = add_cart
            res.writeHead(200).end(stringify(response))
        }

    } else {
        response.message = "The endpoint only accept GET methods"
        res.writeHead(405).end(stringify(response))
    }
})