import { createRouter, defineEventHandler, useBase } from 'h3';
import cart from "../api/cart"

const router = createRouter();
router.get('/hello', cart);
router.get('/hello/world', defineEventHandler(event => 'Hello World'));

export default useBase('/api', router.handler);