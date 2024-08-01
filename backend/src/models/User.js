const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  social_login_info: {
    type: DataTypes.JSON,
    allowNull: true
  },
  profile_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  timestamps: true,
  paranoid: true,
  underscored: true
});

module.exports = User;