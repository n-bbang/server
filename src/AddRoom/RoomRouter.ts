import express, { Request, Response, NextFunction } from "express";
import RoomController from "./RoomController";

const { verifyToken } = require('../middleware/auth');
const RoomRouter = express.Router();


RoomRouter.post("/add",verifyToken,RoomController.AddRoom);
RoomRouter.post("/update",verifyToken,RoomController.UpdateRoom);


export = RoomRouter;
