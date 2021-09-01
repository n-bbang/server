import { NextFunction, Response, Request } from "express";
import {User} from '../../models';

const { Op } = require('sequelize');

class UserController {
	public getUserName = (req: Request, res: Response, next: NextFunction) => {
		console.log("activate get user Name");
		
	}

	public authUser =(req: Request, res: Response, next: NextFunction) => {
		const data = {
			loginId: req.body,
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