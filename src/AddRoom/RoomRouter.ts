import express, { Request, Response, NextFunction } from "express";
import RoomController from "./RoomController";

const { verifyToken } = require('../middleware/auth');
const RoomRouter = express.Router();


RoomRouter.post("/add",RoomController.AddRoom);


export = RoomRouter;
