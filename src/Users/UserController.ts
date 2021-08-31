import { NextFunction, Response, Request } from "express";

class UserController {
	public getUserName = (req: Request, res: Response, next: NextFunction) => {
		console.log("activate get user Name");
		res.json({
			"result" : req.params.id
		});
	}
}

export default new UserController();