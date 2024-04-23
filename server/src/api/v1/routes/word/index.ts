import express from "express";
import {getByID, getByTopicUUID, getList, removeByID} from "./controller";
import {isID} from "../../middleware/core";

const router = express.Router();

router.get('/list', getList);
router.get('/', getByTopicUUID);
router.post('/:id', isID, getByID);
router.delete('/:id', isID, removeByID);

export default router;



