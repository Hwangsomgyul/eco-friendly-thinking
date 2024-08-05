const ReviewService = require('../services/reviewService');

exports.createReview = async (req, res) => {
  try {
    const review = await ReviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: '리뷰 생성 중 예기치 않은 오류가 발생했습니다.', error });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await ReviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: '리뷰 조회 실패', error });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await ReviewService.updateReview(req.params.id, req.body);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: '리뷰 수정 실패', error });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await ReviewService.deleteReview(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: '리뷰 삭제 실패', error });
  }
};