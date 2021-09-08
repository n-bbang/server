import { NextFunction, Response, Request } from "express";
import { RoomInfo } from '../../models';
import crypto from "crypto";


const { Op } = require('sequelize');

class RoomController {
	public AddRoom = async (req: Request, res: Response, next: NextFunction) => {
		const {roomId,platformId,bossUserId,roomName,totalPrice,personalPrice,maxUser,recentPayment} = req.body;
		try {
			const data = {
				platformId : platformId,
				bossUserId : bossUserId,
				roomName : roomName,
				totalPrice : totalPrice,
				personalPrice : personalPrice,
				maxUser : maxUser,
			}
			await RoomInfo.create(data)
			await res.status(200).json({
				result : "success"
			})

		} catch (e) {
			console.log(e);
			res.status(500).json({
				result : "error"
			})
		}

	}


}

export default new RoomController();