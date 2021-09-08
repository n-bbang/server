import { NextFunction, Response, Request } from "express";
import { User } from '../../models';
import crypto from "crypto";

const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

class UserController {
	public getUserName = async (req: Request, res: Response, next: NextFunction) => {
		console.log("activate get user Name");
		const user = await User.findOne({ where: { loginId: req.params.id } });
		res.status(200).json({
			loginId: user.name
		})

	}

	public getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
		console.log("activate get user info");
		try {
			const token = req.headers.authorization.split('Bearer ')[1];
			let jwt_secret = 'nbbang';
			const Id = jwt.decode(token,jwt_secret).loginId;
			const user = await User.findOne({ where: { loginId: Id } });
			res.status(200).json({
				loginId: user.loginId,
				name: user.name,
				nickname: user.nickname,
				gender: user.gender,
				phoneNumber: user.phoneNumber,
				account: user.account,
				bank: user.bank,
			})
		} catch (e) {
			res.status(404).json({
				result: "404 error"
			})
		}

	}

}

export default new UserController();