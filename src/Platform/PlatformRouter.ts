import express, { Request, Response, NextFunction } from "express";
import PlatformController from './PlatformController'

const PlatformRouter = express.Router();

//UserRouter.get("/:id",UserController.getUserName);
//UserRouter.get("/test",UserController.authUser);
PlatformRouter.get("/category",PlatformController.getPlatformCategory);
PlatformRouter.get("/allCategory",PlatformController.getAllPlatform)

export = PlatformRouter;
