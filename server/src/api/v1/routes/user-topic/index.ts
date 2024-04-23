import express from "express";
import {createUserTopic, getUserTopicByID, getUserTopicList, removeByID, updateUserTopic} from "./controller";
import {isID} from "../../middleware/core";
import {updateUserLevel} from "../user-level/controller";

const router = express.Router();

router.get('/list', getUserTopicList);
router.get('/', getUserTopicByID);
router.post('/', createUserTopic);
router.put('/:id', isID, updateUserTopic);
router.delete('/:id', removeByID);

export default router;



