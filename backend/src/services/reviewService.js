const Review = require('../models/Review');

exports.createReview = async (data) => {
  return await Review.create(data);
};

exports.getAllReviews = async () => {
  return await Review.findAll();
};

exports.updateReview = async (id, data) => {
  const review = await Review.findByPk(id);
  if (!review) {
    throw new Error('리뷰를 찾을 수 없습니다.');
  }
  return await review.update(data);
};

exports.deleteReview = async (id) => {
  const review = await Review.findByPk(id);
  if (!review) {
    throw new Error('리뷰를 찾을 수 없습니다.');
  }
  await review.destroy();
};
