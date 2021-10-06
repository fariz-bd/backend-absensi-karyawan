const db = require('../config');
let sequelize = require('sequelize');
const bagian = require('./bagian');
const subBagian = require('./sub_bagian');
const tunjangan = require('./tunjangan');

let User = db.define('user',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NIK : {
        type: sequelize.DataTypes.STRING,
    },
    nama: {
        type: sequelize.DataTypes.STRING,
    },
    email: {
        type: sequelize.DataTypes.STRING,
    },
    password: {
        type: sequelize.DataTypes.STRING,
    },
    jabatan: {
        type: sequelize.DataTypes.STRING,
    }
    
},{
    freezeTableName: true,
    timestamps: false
});

bagian.hasMany(User);
User.belongsTo(bagian);

subBagian.hasMany(User);
User.belongsTo(subBagian);

tunjangan.hasMany(User);
User.belongsTo(tunjangan);

User.sync({ alter: true});

module.exports = User;