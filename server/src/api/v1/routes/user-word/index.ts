import express from "express";
import {getUserLevelByID, getUserLevelList} from "./controller";
import {createUserLevel} from "../user/controller";

const router = express.Router();

router.get('/list', getUserLevelList);
router.get('/:id', getUserLevelByID);
router.post('/', createUserLevel);

export default router;



