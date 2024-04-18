import express from 'express'
import testRoutes from './routes/test/test.routes.js'

const router = express.Router();

router.use('/test', testRoutes);

export default router;
