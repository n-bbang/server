import { NextFunction, Response, Request } from "express";
import { Platform } from '../../models';

class PlatformController {

	public getAllPlatform = async (req: Request, res: Response, next: NextFunction) => {
		try {
            const video = await Platform.findAll({ where: { category: "video" } }) || {};
            const book = await Platform.findAll({ where: { category: "book" } })|| {};
            const music = await Platform.findAll({ where: { category: "music" } }) || {};
            const game = await Platform.findAll({ where: { category: "game" } }) || {};
            const etc = await Platform.findAll({ where: { category: "etc" } }) || {};

            res.status(200).json({
                1: {
                    category: "video",
                    data: video,
                },
                2 : {
                    category: "book",
                    data: book,
                },
                3 : {
                    category: "music",
                    data: music,
                },
                4 : {
                    category: "game",
                    data: game,
                },
                5 : {
                    category: "etc",
                    data: etc,
                }

            })
			
		} catch (e) {
			res.status(404).json({
				result: "404 error"
			})
		}

	}

	public getPlatformCategory = async (req: Request, res: Response, next: NextFunction) => {
		try {
            const categroy = req.query.category;
            const platform = await Platform.findAll({ where: { category: categroy } });
            console.log(platform);
            res.status(200).json({
                category : categroy,
                data : platform
            })
			
		} catch (e) {
			res.status(404).json({
				result: "404 error"
			})
		}

	}

}

export default new PlatformController();