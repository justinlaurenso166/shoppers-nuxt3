import { createRouter, defineEventHandler, useBase } from 'h3';
import cart from "../api/cart"
import products from "../api/products"

const router = createRouter();
router.get('/hello', cart);
router.get('/hello/world', products);

export default useBase('/api', router.handler);