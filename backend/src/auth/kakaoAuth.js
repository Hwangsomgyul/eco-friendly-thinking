const axios = require('axios');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwksClient = require('jwks-rsa');

const {
  KAKAO_CLIENT_ID,
  KAKAO_REDIRECT_URI,
  JWT_SECRET,
  NODE_ENV
} = process.env;

const client = jwksClient({
  jwksUri: 'https://kauth.kakao.com/.well-known/jwks.json'
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function(err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

// ID 토큰 검증 함수
async function verifyIdToken(idToken) {
  return new Promise((resolve, reject) => {
    jwt.verify(idToken, getKey, {}, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

const kakaoAuth = {
  login: async (req, res) => {
    const { code } = req.query;
    try {
      // 카카오 액세스 토큰과 ID 토큰 얻기
      const tokenResponse = await axios.post('https://kauth.kakao.com/oauth/token', 
        {
        grant_type: 'authorization_code',
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: KAKAO_REDIRECT_URI,
        code // 이 부분에서 사용자로부터 받은 인증 코드를 사용
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        
      });

      const { access_token, id_token, refresh_token } = tokenResponse.data;
      console.log(access_token, id_token, refresh_token);

      // ID 토큰 검증
      const decodedIdToken = await verifyIdToken(id_token);
      console.log(decodedIdToken);

      // 검증된 ID 토큰에서 사용자 정보 추출
      const { sub: kakaoId, email, nickname } = decodedIdToken;

      
      

      const user = await User.findOne({ where: { 'social_login_info.sub': kakaoId } });
      console.log(user);

      if (user) {
        // 사용자 존재 시
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          secure: NODE_ENV === 'production',
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
        });

        return res.json({ token, user });
      }

      // 새 사용자 생성
      const newUser = await User.create({
        email,
        nickname,
        social_login_info: { sub: kakaoId },
        profile_image: decodedIdToken.picture
      });

      const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });

      res.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        secure: NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
      });

      return res.json({ token, user: newUser });
    } catch (error) {
      console.error('Kakao login error:', error);
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