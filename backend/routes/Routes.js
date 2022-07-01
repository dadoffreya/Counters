import express from "express";
import { getPassed, addPassed } from "../controller/PassedController.js";
import { getIssues, addIssues } from "../controller/IssueController.js";

const router = express.Router();

router.get('/passes', getPassed);
router.post('/passes', addPassed);
router.get('/rft/issues', getIssues);
router.post('/rft/issues', addIssues);

export default router;