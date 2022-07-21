import express from "express";
import { getPassed, addPassed, getOK, countOK, countDefect } from "../controller/PassedController.js";
import { getIssues, addIssues } from "../controller/IssueController.js";
import { getUsers, SignUp, Login, Logout } from "../controller/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/passes', getPassed);
router.post('/passes', addPassed);
router.get('/rft/issues', getIssues);
router.get('/rft/ok', getOK);
router.get('/rft/countok', countOK);
router.get('/rft/countdef', countDefect);
router.post('/rft/issues', addIssues);
router.get('/users', verifyToken, getUsers);
router.get('/token', refreshToken);
router.post('/users', SignUp);
router.post('/login', Login);
router.delete('/logout', Logout);

export default router;