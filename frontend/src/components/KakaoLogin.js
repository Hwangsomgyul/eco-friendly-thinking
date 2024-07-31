import React from 'react';


const KakaoLogin = () => {
  const handleLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code&scope=openid`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <button onClick={handleLogin}>카카오 로그인</button>
  );
};

export default KakaoLogin;
