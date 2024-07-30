const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const CommunityPhoto = sequelize.define('CommunityPhoto', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.BIGINT,
  photo_url: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  deleted_at: DataTypes.DATE
});

module.exports = CommunityPhoto;
