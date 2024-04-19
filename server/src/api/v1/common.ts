import express from 'express'
import testRoutes from './routes/test/index'
import userRoutes from './routes/user/index'
import levelRoutes from './routes/level/index'
import topicRoutes from './routes/topic/index'
import wordRoutes from "./routes/word/index";

const router = express.Router();

router.use('/test', testRoutes);
router.use('/user', (req: any, res: any, next: any)=> { req.entity = 'user'; next() }, userRoutes);
router.use('/level', (req: any, res: any, next: any)=> { req.entity = 'level'; next() }, levelRoutes);
router.use('/topic',(req: any, res: any, next: any)=> { req.entity = 'topic'; next() }, topicRoutes);
router.use('/word', (req: any, res: any, next: any)=> { req.entity = 'word'; next() }, wordRoutes);

export default router;
