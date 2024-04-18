import express from 'express'
import {RouteIsNotExist} from './../src/api/v1/middleware/route-is-not-exist'
import apiV1 from './../src/api/v1/common';

const router = express.Router();

export default async (app: any) => {
    app.use('/v1/', apiV1)
    app.use(RouteIsNotExist);
    return router;
}
