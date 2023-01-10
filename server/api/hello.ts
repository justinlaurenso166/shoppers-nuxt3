import { createRouter, useBase } from 'h3';

const router = createRouter();

router.get('/', () => 'Hello World');

export default useBase('/api/test', router.handler);