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
        if (!query._id) {
            //* Get all products from database
            const all = await Products.find();
            response.data = all
            res.statusCode = 200;
            return response;
        } else {
            const getProduct = await Products.findById(query._id)
            response.data = getProduct;
            res.statusCode = 200;
            return response
        }
    } else if (req.method == "POST") {
        //* Get data from body
        const data = await readBody(event);

        //* Save data in Products Schema
        const add_products = await new Products(data).save();

        if (add_products) {
            response.message = "Success add Products"
            response.data = data
            res.writeHead(200).end(stringify(response))
        } else {
            err.error = "Error Occured"
            res.writeHead(500).end(stringify(err))
        }
    } else {
        response.message = "The endpoint only accept GET methods"
        res.writeHead(405).end(stringify(response))
    }
})