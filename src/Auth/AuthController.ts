import { NextFunction, Response, Request } from "express";
import { User } from '../../models';
import crypto from "crypto";

const { Op } = require('sequelize');
const passport = require('passport');
const jwt = require('jsonwebtoken');

class AuthController {

	public authUser = async (req: Request, res: Response, next: NextFunction) => {
		console.log("input : ",req.body);
		try {
			const { body: { loginId, passwd, name, nickname, gender, phoneNumber } } = req;
			let salt = 10 + "";
			let hashPassword = crypto.createHash("sha512").update(passwd+salt).digest("hex");
			console.log(hashPassword)
			const data = {
				loginId: loginId,
				passwd: hashPassword,
				name: name,
				nickname: nickname,
				gender: gender,
				phoneNumber: phoneNumber,
				saltKey:salt
			}
			await User.create(data).catch(e => {
				console.log("error", e);
			});
			await res.json({
				status: 200,
				message: "joinSuccess"
			});
		} catch (e) {
			res.sendStatus(500);

		}
	}

	public login = async (req: Request, res: Response, next: NextFunction) => {
		try {
			console.log("input : ",req.body);
			passport.authenticate('local', { session: false }, (err, user) => {
				if (err || !user) {
					console.log("err:",user);
					return res.status(400).json({ success: 400, message: "로그인 실패" });
				}
				req.login(user, { session: false }, (err) => {
					if (err) {
						console.log(err);
						return res.send(err);
					}
					const token = jwt.sign(
						{ loginId: user.loginId },
						'nbbang',
						{ expiresIn: "7d" }
					);
					return res.json({ status: 200, message: "로그인 성공", token });
				});
			})(req, res);
		} catch (e) {
			console.error(e);
			return next(e);
		}
	}

	public check = (req, res) => {
		res.json(req.decoded);
	};
}

export default new AuthController();