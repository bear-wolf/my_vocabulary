import express from "express";
import {create, getByID, getList, removeByID} from "./controller";
import {isID} from "../../middleware/core";

const router = express.Router();

router.get('/list', [], getList);
router.post('/', create);
router.get('/:id', isID, getByID);
router.delete('/:id', isID, removeByID);

export default router;



