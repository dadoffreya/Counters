import express from "express";
import { getPassed, addPassed, getOK, countOK, countDefect } from "../controller/PassedController.js";
import { getIssues, addIssues } from "../controller/IssueController.js";
import { getUsers, Register, Login, Logout } from "../controller/Users.js";
import { refreshToken } from "../controller/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/passes', getPassed);
router.post('/passes', addPassed);
router.get('/rft/issues', getIssues);
router.get('/rft/ok', getOK);
router.get('/rft/countok', countOK);
router.get('/rft/countdef', countDefect);
router.post('/rft/issues', addIssues);
router.get('/users',verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);


export default router;