const express = require('express');
const router = express.Router();
const kakaoAuth = require('../auth/kakaoAuth');

router.post('/auth/kakao', kakaoAuth.login);
router.post('/auth/refresh', kakaoAuth.refresh);

module.exports = router;