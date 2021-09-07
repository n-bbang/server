const Sequelize = require('sequelize');

class UserInfo extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
	    userId : {
		    type:Sequelize.INTEGER,
		    allowNull:false,
	    },
	    roomId : {
		    type:Sequelize.INTEGER,
		    allowNull:false,
	    },
	    paied : {
		type:Sequelize.INTEGER,
		allowNull:false
	    }

	    
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'UserInfo',
            tableName: 'UserInformations',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {}
};

module.exports = UserInfo;