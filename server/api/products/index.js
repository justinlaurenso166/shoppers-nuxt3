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
        res.writeHead(200).end(stringify(response))
    } else {
        response.message = "The endpoint only accept GET methods"
        res.writeHead(405).end(stringify(response))
    }
})