import express from "express";
import { getPassed, addPassed, getOK, countOK, countDefect } from "../controller/PassedController.js";
import { getIssues, addIssues } from "../controller/IssueController.js";
import { getUsers, Register, Login } from "../controller/Users.js";

const router = express.Router();

router.get('/passes', getPassed);
router.post('/passes', addPassed);
router.get('/rft/issues', getIssues);
router.get('/rft/ok', getOK);
router.get('/rft/countok', countOK);
router.get('/rft/countdef', countDefect);
router.post('/rft/issues', addIssues);
router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);


export default router;