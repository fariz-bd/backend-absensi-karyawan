const db = require('../config');
const sequelize = require('sequelize');
const User = require('./user');

let Gaji = db.define('gaji',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tunjangan: {
        type: sequelize.DataTypes.INTEGER,
    },
    gapok: {
        type: sequelize.DataTypes.INTEGER,
    },
    absen: {
        type: sequelize.DataTypes.INTEGER,
    },
    potongan: {
        type: sequelize.DataTypes.INTEGER,
    },
    totalGaji:{
        type: sequelize.DataTypes.INTEGER,
    }
    
},{
    freezeTableName: true,
    timestamps: false
});

User.hasMany(Gaji);
Gaji.belongsTo(User);

Gaji.sync({ alter: true});

module.exports = Gaji;