import { sendError } from 'h3';
export default defineEventHandler((event) => {
    const clientSideRoutes = !event.node.req.url.startsWith('/api');
    if (clientSideRoutes) {
        return;
    } else if (!event.node.req.headers.authorization) {
        sendError(event, new Error('Unathorized'));
    }
    event.context.auth = {
        authenticated: true,
        user: event.node.req.user,
    };
});