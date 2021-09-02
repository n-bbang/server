import express, { Request, Response, NextFunction } from "express";
import UserController from "./UserController";

const UserRouter = express.Router();

//UserRouter.get("/:id",UserController.getUserName);
//UserRouter.get("/test",UserController.authUser);
UserRouter.get("/auth",UserController.authUser);

export = UserRouter;
