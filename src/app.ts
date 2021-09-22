import express from 'express';
import UserRouter, { post } from './Users/UserRouter';
import AuthRouter from './Auth/AuthRouter';
import RoomRouter from './AddRoom/RoomRouter';
import PlatformRouter from './Platform/PlatformRouter'
import dotenv from 'dotenv';
import APILimiter from './middleware/limit';
import passport from 'passport';
import morgan from 'morgan';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import path from 'path';


const passportConfig = require('./Passport/passport');
const { sequelize } = require('../models');

const swaggerSpec = YAML.load(path.join(__dirname, '../config/swagger.yaml'))
console.log(__dirname);

const app: express.Application = express();
const port = process.env.PORT || 3000;

dotenv.config();

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });
app.use(express.json());
app.use(morgan('combined', {
  stream: fs.createWriteStream('./access.log', { flags: 'a' })
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use("/user", APILimiter, UserRouter);
app.use("/auth", AuthRouter);
app.use("/room", RoomRouter);
app.use("/platform", PlatformRouter);

app.use(passport.initialize());
passportConfig();

app.listen(port, () => {
  console.log('start')
})