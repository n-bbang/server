import express from 'express';
import UserRouter from './Users/UserRouter';

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use("/user", UserRouter);

app.listen(3000, () => {
	console.log('start')
})