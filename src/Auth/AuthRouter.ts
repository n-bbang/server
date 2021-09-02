import express, { Request, Response, NextFunction } from "express";
import AuthController from "./AuthController";

const AuthRouter = express.Router();


AuthRouter.post("/",AuthController.authUser);

export = AuthRouter;
