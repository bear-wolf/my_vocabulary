import express from "express";
import {createUserLevel, getUserLevelByID, getUserLevelList, removeByID, updateUserLevel} from "./controller";
import {isID, isUUID} from "../../middleware/core";

const router = express.Router();

router.get('/list', getUserLevelList);
router.get('/',  getUserLevelByID);
router.post('/', createUserLevel);
router.put('/:id', isID, updateUserLevel);
router.delete('/:id', isID, removeByID);

export default router;



