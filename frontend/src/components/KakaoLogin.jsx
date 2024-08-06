import React from "react";

console.log(process.env.REACT_APP_KAKAO_CLIENT_ID);
console.log(process.env.REACT_APP_KAKAO_REDIRECT_URI);

const KakaoLogin = () => {
  const handleLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <img
      src="/images/kakao_Login_medium.png"
      alt="Kakao Login"
      onClick={handleLogin}
    />
  );
};

export default KakaoLogin;
