const db = require('../config');
const sequelize = require('sequelize');

let Tunjangan = db.define('tunjangan',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    jabatan: {
        type: sequelize.DataTypes.STRING,
    },
    jumlah: {
        type: sequelize.DataTypes.INTEGER,
    }
    
},{
    freezeTableName: true,
    timestamps: false
});

Tunjangan.sync({ alter: true});

module.exports = Tunjangan;