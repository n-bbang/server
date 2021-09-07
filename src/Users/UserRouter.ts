import express, { Request, Response, NextFunction } from "express";
import UserController from "./UserController";

const { verifyToken } = require('../middleware/auth');
const UserRouter = express.Router();

//UserRouter.get("/:id",UserController.getUserName);
//UserRouter.get("/test",UserController.authUser);
UserRouter.get("/username",verifyToken,UserController.getUserName);

export = UserRouter;
