import express from 'express'
import testRoutes from './routes/test/index'
import userRoutes from './routes/user/index'
import userLevelRoutes from './routes/user-level/index'
// import userTopicRoutes from './routes/user-topic/index'
// import userWordRoutes from './routes/user-word/index'
import levelRoutes from './routes/level/index'
import topicRoutes from './routes/topic/index'
import wordRoutes from "./routes/word/index";

const router = express.Router();

router.use('/test', testRoutes);
router.use('/user', (req: any, res: any, next: any)=> { req.entity = 'user'; next() }, userRoutes);
router.use('/user-level', (req: any, res: any, next: any)=> { req.entity = 'user-level'; next() }, userLevelRoutes);
// router.use('/user-topic', (req: any, res: any, next: any)=> { req.entity = 'user-topic'; next() }, userTopicRoutes);
// router.use('/user-word', (req: any, res: any, next: any)=> { req.entity = 'user-topic'; next() }, userTopicRoutes);

router.use('/level', (req: any, res: any, next: any)=> { req.entity = 'level'; next() }, levelRoutes);
router.use('/topic',(req: any, res: any, next: any)=> { req.entity = 'topic'; next() }, topicRoutes);
router.use('/word', (req: any, res: any, next: any)=> { req.entity = 'word'; next() }, wordRoutes);

export default router;
