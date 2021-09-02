const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
	    userId:{
		type:Sequelize.INTEGER,
		allowNull:true,
		primaryKey: true,
		unique:true,
		autoIncrement:true,
	    },
	    loginId: {
		type:Sequelize.STRING(32),
		allowNull:false,
		unique:true,
	    },
	    passwd: {
		type:Sequelize.STRING(255),
		allowNull:false,
	    },
	    name : {
		type:Sequelize.STRING(15),
		allowNull:false,
	    },
	    nickname : {
		    type: Sequelize.STRING(15),
		    allowNull:true,
		    unique:true,
	    },
	    gender : {
		type:Sequelize.BOOLEAN,
		allowNull:false,
	    },
	    phoneNumber: {
		type:Sequelize.STRING(32),
		allowNull:false,
	    },
	    account : {
		type:Sequelize.STRING(32),
		allowNull:true,
		unique:true,
	    },
	    bank : {
		type:Sequelize.STRING(32),
		allowNull:true,
	    }
	    
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'Users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {}
};

module.exports = User;