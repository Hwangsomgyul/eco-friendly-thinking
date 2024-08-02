import React from "react";
import logo from "../asserts/logo.png";
import kakaoLogin from "../asserts/kakao_login_medium.png";

const handleLogin = () => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  window.location.href = kakaoAuthUrl;
};

export const LoginSection = () => {
  return (
    <>
      <div className="w-1/5 pt-300 flex flex-col gap-30">
        <div className="flex w-3/5">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex">
          <div className="flex pl-20 w-1/2">
            <img src={kakaoLogin} alt="Kakao Login" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </>
  );
};
