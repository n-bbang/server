const Sequelize = require('sequelize');

class Platfrom extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
	    platformId:{
		type:Sequelize.INTEGER,
		allowNull:false,
		primaryKey:true,
	    },
	    platformName : {
		type:Sequelize.STRING(32),
		allowNull:false,
	    },
	    imagePath : {
		type:Sequelize.STRING(32),
		allowNull:true,
	    },
        category : {
        type:Sequelize.STRING(32),
        allowNull:false,
        },
	    
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Platform',
            tableName: 'Platforms',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {}
};

module.exports = Platfrom;