export {}
import * as userCtrl from "./user.controller";
import express from 'express'
const router = express.Router();

router.post('/:id', userCtrl.getByID);
router.get('/list', userCtrl.getList);
router.patch('/', userCtrl.patch);

export default router;
