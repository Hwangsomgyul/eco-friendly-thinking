import React from "react";
// import logo from "../../public/images/";
// import kakaoLogin from "../../public/kakao_login_medium.png";
import KakaoLogin from "./KakaoLogin";

export const LoginSection = () => {
  return (
    <>
      <div className="w-1/5 pt-300 flex flex-col gap-30">
        <div className="flex w-3/5">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="flex">
          <div className="flex pl-20 w-1/2">
            <KakaoLogin></KakaoLogin>
          </div>
        </div>
      </div>
    </>
  );
};
