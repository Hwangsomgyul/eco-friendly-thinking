const CommunityService = require('../services/communityService');

exports.createPost = async (req, res) => {
  try {
    const post = await CommunityService.createPost({
      user_id: req.body.user_id,
      content: req.body.content,
      photo_url: req.file ? req.file.path : null
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: '포스트 생성 중 오류가 발생했습니다.', error });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await CommunityService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: '포스트 조회 실패', error });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await CommunityService.updatePost(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: '포스트 수정 실패', error });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await CommunityService.deletePost(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: '포스트 삭제 실패', error });
  }
};
