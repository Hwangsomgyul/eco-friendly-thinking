const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const SeoulRegion = sequelize.define('SeoulRegion', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  NamBu: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  BukBu: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = SeoulRegion;