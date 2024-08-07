const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const upload = require('../middlewares/multerConfig');
const ReviewPhoto = require('../models/ReviewPhoto');

router.post('/', reviewController.createReview);
router.get('/', reviewController.getReviews);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

// 사진 업로드 라우트
router.post('/:reviewId/photos', upload.single('photo'), async (req, res) => {
    try {
        const { reviewId } = req.params;
        const photo = await ReviewPhoto.create({
            user_id: req.body.user_id, // 사용자 ID 연결 나중에 확인
            photo_url: req.file.path,
            review_id: reviewId
        });
        res.status(201).json(photo);
    } catch (error) {
        res.status(500).json({ message: '사진 업로드 실패', error: error.message });
    }
});

// 사진 보여주는 라우트
router.get('/:reviewId/photos', async (req, res) => {
    try {
        const { reviewId } = req.params;
        const photos = await ReviewPhoto.findAll({
            where: { review_id: reviewId }
        });
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ message: '사진 조회 실패', error: error.message });
    }
});

module.exports = router;