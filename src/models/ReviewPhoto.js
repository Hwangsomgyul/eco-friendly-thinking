const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const ReviewPhoto = sequelize.define('ReviewPhoto', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  photo_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true,
  underscored: true
});

module.exports = ReviewPhoto;