import express, { Request, Response, NextFunction } from "express";
import UserController from "./UserController";

const UserRouter = express.Router();

UserRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("world");
});
//UserRouter.get("/:id",UserController.getUserName);
//UserRouter.get("/test",UserController.authUser);
UserRouter.post("/auth",UserController.authUser);

export = UserRouter;
