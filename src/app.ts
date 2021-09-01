import express from 'express';
import UserRouter from './Users/UserRouter';

const app: express.Application = express();
const port = process.env.PORT || 3000;
// const sqlServer = 
// const connect = sqlServer.dbconnection.init();

app.use("/user", UserRouter);

app.listen(5000, () => {
	console.log('start')
})