const express = require('express');
const router = express.Router();
const kakaoAuth = require('../auth/kakaoAuth');
const reviewRoutes = require('./reviewRoutes');
const communityRoutes = require('./communityRoutes');

router.get('/auth/kakao/callback', kakaoAuth.login);
router.post('/auth/refresh', kakaoAuth.refresh);
router.use('/reviews', reviewRoutes);
router.use('/community', communityRoutes);



module.exports = router;