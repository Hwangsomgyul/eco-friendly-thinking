const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const DataVisualization = sequelize.define('DataVisualization', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  statistics: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = DataVisualization;