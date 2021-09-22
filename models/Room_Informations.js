const Sequelize = require('sequelize');

class RoomInfo extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
	    roomId : {
		type:Sequelize.INTEGER,
		allowNull:true,
		primaryKey:true,
		autoIncrement:true
	    },
	    platformId : {
		    type:Sequelize.INTEGER,
		    allowNull:false,
	    },
	    bossUserId : {
		    type:Sequelize.STRING,
		    allowNull:false,

	    },
	    roomName : {
		    type:Sequelize.STRING(32),
		    allowNull:true,

	    },
	    totalPrice : {
		    type:Sequelize.INTEGER,
		    allowNull:true

	    },
	    personalPrice : {
		type:Sequelize.INTEGER,
		allowNull:true

	    },
	    maxUser : {
		type:Sequelize.INTEGER,
		allowNull:false

	    },
	    recentPayment : {
		type:Sequelize.DATE,
		allowNull:true
	    }

	    
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'RoomInfo',
            tableName: 'RoomInformations',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {}
};

module.exports = RoomInfo;