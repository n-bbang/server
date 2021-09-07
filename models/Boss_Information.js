const Sequelize = require('sequelize');

class BossInfo extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
	    UserId : {
		    type:Sequelize.INTEGER,
		    allowNull:false,
	    },
	    roomId : {
		    type:Sequelize.INTEGER,
		    allowNull:false,
		    primaryKey:true
	    }

	    
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'BossInfo',
            tableName: 'BossInformations',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {}
};

module.exports = BossInfo;