const db = require('../config');
const sequelize = require('sequelize');

let Bagian = db.define('bagian',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_bagian: {
        type: sequelize.DataTypes.STRING,
    },
    
},{
    freezeTableName: true,
    timestamps: false
});

Bagian.sync({ alter: true});

module.exports = Bagian;