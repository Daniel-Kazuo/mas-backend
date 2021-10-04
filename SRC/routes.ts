import { request, response, Router } from 'express';

const routes = Router();

routes.get('/user', (request, response) => response.json({
    message:'hello world'
}))

export default routes;