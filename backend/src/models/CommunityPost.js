const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const CommunityPost = sequelize.define('CommunityPost', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  photo_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true,
  underscored: true
});

module.exports = CommunityPost;