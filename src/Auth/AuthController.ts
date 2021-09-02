import { NextFunction, Response, Request } from "express";
import { User } from '../../models';
import crypto from "crypto";

const { Op } = require('sequelize');

class AuthController {

	public authUser = async (req: Request, res: Response, next: NextFunction) => {
		console.log(req.body.passwd.toString());
		try {
			const {body: { loginId , passwd,name,nickname,gender,phoneNumber }} = req;
			let hashPassword = crypto.createHash("sha512").update(passwd).digest("hex");
			console.log(hashPassword)
			const data = {
				loginId: loginId,
				passwd: hashPassword,
				name: name,
				nickname: nickname,
				gender: gender,
				phoneNumber: phoneNumber,
			}
			await User.create(data).catch(e=> {
				console.log("error", e);
			});
			await res.json({
				status:200,
				message:"joinSuccess"
			});
		} catch (e) {
			res.sendStatus(500);

		}
	}
}

export default new AuthController();