import express, { Request, Response, NextFunction } from "express";
import AuthController from "./AuthController";

const { verifyToken } = require('../middleware/auth');
const AuthRouter = express.Router();


AuthRouter.post("/",AuthController.authUser);
AuthRouter.post('/login', AuthController.login);
AuthRouter.get('/check', verifyToken ,AuthController.check);

export = AuthRouter;
