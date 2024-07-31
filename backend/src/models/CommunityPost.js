const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const CommunityPhoto = sequelize.define('CommunityPhoto', {
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

module.exports = CommunityPhoto;