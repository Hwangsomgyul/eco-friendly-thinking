const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 사용자 정보 가져오기
router.get('/user/info', async (req, res) => {
  try {
    const userId = req.userId; // 인증 미들웨어에서 설정된 userId 사용
    const user = await User.findByPk(userId, {
      attributes: ['nickname', 'email']
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
