const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Points = sequelize.define('Points', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  first_point: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true,
  underscored: true
});

module.exports = Points;