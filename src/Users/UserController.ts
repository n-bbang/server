import { NextFunction, Response, Request } from "express";
import { User } from '../../models';
import crypto from "crypto";

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
			const user = await User.findOne({ where: { loginId: req.body.id } });
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