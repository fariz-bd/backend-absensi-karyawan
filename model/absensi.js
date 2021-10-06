const db = require('../config');
const sequelize = require('sequelize');
const User = require('./user');

let Absensi = db.define('absensi',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tanggal: {
        type: sequelize.DataTypes.DATE,
    },
    foto: {
        type: sequelize.DataTypes.STRING,
    }
    
},{
    freezeTableName: true,
    timestamps: false
});

User.hasMany(Absensi);
Absensi.belongsTo(User);

Absensi.sync({ alter: true});

module.exports = Absensi;