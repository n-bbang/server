import { NextFunction, Response, Request } from "express";
const sqlServer = require('../../config/db');	//사용자 정의한 함수 사용
const connect = sqlServer.dbconnection.init();

class UserController {
	public getUserName = (req: Request, res: Response, next: NextFunction) => {
		console.log("activate get user Name");
		// const sql = `select name from users where id='${req.params.id}'`;
		// connect.query(sql, (err, result, fields) => {
		// 	if(err) throw err;
		// 	res.json(
		// 		result
		// 	);
	
		// });
		res.json( {
			"input" : req.params.id
		})
	}
}

export default new UserController();