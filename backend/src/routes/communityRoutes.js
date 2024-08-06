const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const upload = require('../middlewares/multerConfig');
const CommunityPhoto = require('../models/CommunityPhoto');

router.post('/', communityController.createPost);

router.post('/:postId/photos', upload.single('photo'), async (req, res) => {
  try {
    const { postId } = req.params;
    const photo = await CommunityPhoto.create({
      user_id: req.body.user_id,
      photo_url: req.file.path,
      post_id: postId
    });
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ message: '사진 업로드 실패', error: error.message });
  }
});

router.get('/', communityController.getPosts);
router.put('/:id', communityController.updatePost);
router.delete('/:id', communityController.deletePost);

module.exports = router;