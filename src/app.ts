import express from 'express';
import UserRouter from './Users/UserRouter';
import AuthRouter from './Auth/AuthRouter';

const passport = require('passport');
const passportConfig = require('./Passport/passport');

const { sequelize } = require('../models');

const app: express.Application = express();
const port = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });
  app.use(express.json());
app.use("/user", UserRouter);
app.use("/auth",AuthRouter);

app.use(passport.initialize());
passportConfig();

app.listen(5000, () => {
	console.log('start')
})