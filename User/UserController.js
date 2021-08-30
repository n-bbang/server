const sqlServer = require('../config/db');	//사용자 정의한 함수 사용
const connect = sqlServer.dbconnection.init();
exports.getUser = async (req, res, next) => {
    return "test";
}


exports.getUserName = (req, res, next) => {
	const sql = `select name from users where id='${req.params.id}'`;
	console.log(sql);
	connect.query(sql, (err, result, fields) => {
		if(err) throw err;
		res.json(
			result
		);

	});
}

exports.SignIn = (req,res,next)=> {
	const sql = `insert into users values ('${req.body.id}', '${req.body.attend}', '${req.body.name}', '${req.body.password}')`;
	connect.query(sql,(err,result,fieds)=> {
		if(err) throw err;
		res.json({
			"result" : "success"
		});
	})
}