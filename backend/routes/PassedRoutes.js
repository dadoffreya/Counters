import express from "express";
import { getPassed, addPassed } from "../controller/PassedController.js";

const router = express.Router();

router.get('/passes', getPassed);
router.post('/passes', addPassed);

export default router;