const CommunityPost = require('../models/CommunityPost');

exports.createPost = async (data) => {
  return await CommunityPost.create(data);
};

exports.getAllPosts = async () => {
  return await CommunityPost.findAll();
};

exports.updatePost = async (id, data) => {
  const post = await CommunityPost.findByPk(id);
  if (!post) {
    throw new Error('포스트를 찾을 수 없습니다.');
  }
  return await post.update(data);
};

exports.deletePost = async (id) => {
  const post = await CommunityPost.findByPk(id);
  if (!post) {
    throw new Error('포스트를 찾을 수 없습니다.');
  }
  await post.destroy();
};
