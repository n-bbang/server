 
const Sequelize = require('sequelize');
const User = require('./User');
const Platform = require('./Platform');
const RoomInfo = require('./Room_Informations');
const BossInfo = require('./Boss_Information');
const UserInfo = require('./ User_Information');


const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Platform = Platform;
db.RoomInfo = RoomInfo;
db.BossInfo = BossInfo;
db.UserInfo = UserInfo;

User.init(sequelize);
Platform.init(sequelize);
RoomInfo.init(sequelize);
BossInfo.init(sequelize);
UserInfo.init(sequelize);

User.associate(db);
Platform.associate(db);
RoomInfo.associate(db);
BossInfo.associate(db);
UserInfo.associate(db);


module.exports = db;