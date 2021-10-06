const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('absensi', 'postgres', 'Berkahamin46', {
	host: 'localhost',
	dialect: 'postgres',
    logging: false
});

module.exports = sequelize;