
export default defineEventHandler((event) => {
    event.node.res.writeHead(200).end(JSON.stringify({data: "Hello"}))
})