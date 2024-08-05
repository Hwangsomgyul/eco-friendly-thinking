const express = require('express');
const router = express.Router();
const kakaoAuth = require('../auth/kakaoAuth');
const reviewRoutes = require('./reviewRoutes');

router.get('/auth/kakao/callback', kakaoAuth.login);
router.post('/auth/refresh', kakaoAuth.refresh);
router.use('/reviews', reviewRoutes);



module.exports = router;