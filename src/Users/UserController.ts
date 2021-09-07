import { NextFunction, Response, Request } from "express";
import {User} from '../../models';
import crypto from "crypto";

const { Op } = require('sequelize');

class UserController {
	public getUserName = (req: Request, res: Response, next: NextFunction) => {
		console.log("activate get user Name");
		res.json({
			"test":"test"
		})
		
	}
	 
}

export default new UserController();