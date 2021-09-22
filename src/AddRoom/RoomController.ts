import { NextFunction, Response, Request } from "express";
import { RoomInfo } from '../../models';
import { BossInfo } from '../../models'
import { UserInfo } from '../../models'
import crypto from "crypto";

const jwt = require('jsonwebtoken');

class RoomController {
	public AddRoom = async (req: Request, res: Response, next: NextFunction) => {
		const { roomId, platformId, bossUserId, roomName, totalPrice, personalPrice, maxUser, recentPayment } = req.body;
		try {
			const data = {
				platformId: platformId,
				bossUserId: bossUserId,
				roomName: roomName,
				totalPrice: totalPrice,
				personalPrice: personalPrice,
				maxUser: maxUser,
			}
			const roomInfo = await RoomInfo.create(data)
			const bossInfo = await BossInfo.create({ UserId : bossUserId, roomId:roomInfo.roomId})
			await res.status(200).json({
				result: "success",
				roomInfo : roomInfo,
				bossInfo : bossInfo
			})

		} catch (e) {
			console.log(e);
			res.status(500).json({
				result: "error"
			})
		}

	}

	public joinRoom = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { roomId, userId, paied } = req.body;
			const data = {
				userId: userId,
				roomId: roomId,
				paied: paied
			}

			await UserInfo.create(data);
			await res.status(200).json({
				result: "success"
			})

		} catch (e) {
			console.log(e);
			res.status(500).json({
				result: "error"
			})

		}
	}

	public showRooms = async (req: Request, res: Response, next: NextFunction) => {
		const rooms = await RoomInfo.findAll();
		res.status(200).json(rooms);
	}

	// public UpdateRoom = async (req: Request, res: Response, next: NextFunction) => {
	// 	const { roomName, totalPrice, personalPrice, maxUser, recentPayment } = req.body;
	// 	const token = req.headers.authorization.split('Bearer ')[1];
	// 	let jwt_secret = 'nbbang';
	// 	const Id = jwt.decode(token, jwt_secret).loginId;
	// 	const roomId = BossInfo.findOne({ where: { userId: Id } }).roomId;
	// 	try {
	// 		const data = {
	// 			roomName: roomName,
	// 			totalPrice: totalPrice,
	// 			personalPrice: personalPrice,
	// 			maxUser: maxUser,
	// 		}
	// 		await BossInfo.update(data, { where: { roomId: roomId } });
	// 		await res.status(200).json({
	// 			result: "update success"
	// 		})
	// 	} catch (e) {
	// 		console.log(e);
	// 		res.status(500).json({
	// 			result: "error"
	// 		})
	// 	}
	// }


}

export default new RoomController();