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
  },
  post_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'community_posts',
      key: 'id'
    }
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  deleted_at: DataTypes.DATE
});

module.exports = CommunityPhoto;