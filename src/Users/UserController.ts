import { NextFunction, Response, Request } from "express";
import {User} from '../../models';
import crypto from "crypto";

const { Op } = require('sequelize');

class UserController {
	public getUserName = (req: Request, res: Response, next: NextFunction) => {
		console.log("activate get user Name");
		
	}

	public authUser =(req: Request, res: Response, next: NextFunction) => {
		let salt = Math.round((new Date().valueOf() * Math.random())) + "";
		let hashPassword = crypto.createHash("sha512").update("inputPassword" + salt).digest("hex");
		const data = {
			loginId: "jwoo99278",
			passwd: "1234",
			name: 'abcd',
			nickname:"ddd",
			gender:true,
			phoneNumber:"12312312",
		    }
		User.create(data);
		res.json(data)
	} 
}

export default new UserController();