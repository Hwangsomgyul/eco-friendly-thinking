const axios = require('axios');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');

const {
  KAKAO_CLIENT_ID,
  KAKAO_REDIRECT_URI,
  JWT_SECRET,
  NODE_ENV
} = process.env;

const kakaoAuth = {
  login: async (req, res) => {
    const { code } = req.body;
    try {
      // 카카오 액세스 토큰 얻기
      const tokenResponse = await axios.post('https://kauth.kakao.com/oauth/token', null, {
        params: {
          grant_type: 'authorization_code',
          client_id: KAKAO_CLIENT_ID,
          redirect_uri: KAKAO_REDIRECT_URI,
          code,
        },
      });

      const { access_token, refresh_token } = tokenResponse.data;

      // 카카오 사용자 정보 얻기
      const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const { id, kakao_account } = userResponse.data;

      // 사용자 찾기
      const user = await User.findOne({ where: { 'social_login_info.kakao_id': id } });
      
      if (user) {
        // 기존 사용자 처리
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          secure: NODE_ENV === 'production',
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
        });

        return res.json({ token, user });
      }

      // 새 사용자 생성
      const savedUser = await User.create({
        email: kakao_account.email,
        nickname: kakao_account.profile.nickname,
        social_login_info: { kakao_id: id },
        profile_url: kakao_account.profile.profile_image_url,
      });

      const token = jwt.sign({ userId: savedUser.id }, JWT_SECRET, { expiresIn: '1h' });

      res.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        secure: NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
      });

      res.json({ token, user: savedUser });
    } catch (error) {
      console.error('Kakao login error:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: '로그인 중 오류가 발생했습니다.' });
    }
  },

  // 리프레시 토큰을 사용하여 새 액세스 토큰 발급
  refresh: async (req, res) => {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      return res.status(401).json({ error: '리프레시 토큰이 없습니다.' });
    }

    try {
      const response = await axios.post('https://kauth.kakao.com/oauth/token', null, {
        params: {
          grant_type: 'refresh_token',
          client_id: KAKAO_CLIENT_ID,
          refresh_token: refreshToken,
        },
      });

      const { access_token, refresh_token: new_refresh_token } = response.data;

      // 새 리프레시 토큰이 발급된 경우 쿠키 업데이트
      if (new_refresh_token) {
        res.cookie('refresh_token', new_refresh_token, {
          httpOnly: true,
          secure: NODE_ENV === 'production',
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
        });
      }

      res.json({ access_token });
    } catch (error) {
      console.error('Token refresh error:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: '토큰 갱신 중 오류가 발생했습니다.' });
    }
  },
};

module.exports = kakaoAuth;