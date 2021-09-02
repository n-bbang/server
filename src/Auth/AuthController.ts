import { NextFunction, Response, Request } from "express";
import {User} from '../../models';
import crypto from "crypto";

const { Op } = require('sequelize');

class AuthController {

	public authUser =(req: Request, res: Response, next: NextFunction) => {
		let salt = Math.round((new Date().valueOf() * Math.random())) + "";
		let hashPassword = crypto.createHash("sha512").update(req.body.passwd).digest("hex");
		console.log(hashPassword)
		const data = {
			loginId: req.body.loginId,
			passwd: hashPassword,
			name: 'abcd',
			nickname:"ddd",
			gender:true,
			phoneNumber:"12312312",
		    }
		User.create(data);
		res.json(data)
	} 
}

export default new AuthController();