const db = require('../config');
const sequelize = require('sequelize');
const Bagian = require('./bagian')

let Sub_bagian = db.define('subbagian',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_subbagian: {
        type: sequelize.DataTypes.STRING,
    },
    
},{
    freezeTableName: true,
    timestamps: false
});

Bagian.hasMany(Sub_bagian);
Sub_bagian.belongsTo(Bagian);

Sub_bagian.sync({ alter: true});

module.exports = Sub_bagian;