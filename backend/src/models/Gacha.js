const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Gacha = sequelize.define('Gacha', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  use_point: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = Gacha;