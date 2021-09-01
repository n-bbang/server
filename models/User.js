const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
	    userId:{
		type:Sequelize.INTEGER,
		allowNull:false,
		primaryKey: true,
		unique:true,
	    },
	    loginId: {
		type:Sequelize.STRING(32),
		allowNull:false,
	    },
	    passwd: {
		type:Sequelize.STRING(32),
		allowNull:false,
	    },
	    name : {
		type:Sequelize.STRING(15),
		allowNull:false,
	    },
	    nickname : {
		    type: Sequelize.STRING(15),
		    allowNull:true,
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