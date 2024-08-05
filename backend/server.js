const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes/routes');
const sequelize = require('./src/config/db.config');
const { expressjwt: jwt } = require('express-jwt');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

//토큰 검증
app.use(jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  getToken: req => req.cookies.token
}).unless({ path: ['/api/login', '/api/register'] }));

app.use('/', routes);

// 기본 라우트 추가
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('데이터베이스 연결 성공');
  app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  });
}).catch(err => {
  console.error('데이터베이스 연결 오류:', err);
});