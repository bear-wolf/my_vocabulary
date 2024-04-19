import express from "express";
import { general } from "./test.controller";

const router = express.Router();

router.get('/', general);

export default router;



