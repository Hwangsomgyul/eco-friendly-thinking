// 환경 변수 설정 파일

const dotenv = require('dotenv');
   
   dotenv.config();
   
   module.exports = {
     KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
     KAKAO_REDIRECT_URI: process.env.KAKAO_REDIRECT_URI,
     JWT_SECRET: process.env.JWT_SECRET,
     NODE_ENV: process.env.NODE_ENV
   };
