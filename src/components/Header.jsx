import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // 현재 경로에 따라 활성화 상태를 결정하는 함수
  const getLinkClassName = (path) => {
    const mainPath = location.pathname.split("/");
    const nowPath = "/" + mainPath[1];

    return nowPath === path
      ? "bg-white text-black rounded-t-lg"
      : "text-white hover:bg-ghostwhite";
  };

  return (
    <header className="flex justify-between items-start bg-[#365a31] pt-[10px] pr-[20px] pb-0 pl-[15px] text-white w-full h-[180px] relative">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-[227px] h-[150px]" />
      </div>
      <div className="w-full h-full">
        <div className="flex text-lg items-start mt-[130px] space-x-2">
          <Link
            to="/MainPage"
            className={`w-[120px] h-[50px] flex items-center justify-center cursor-pointer ${getLinkClassName(
              "/MainPage"
            )}`}
          >
            홈
          </Link>
          <Link
            to="/About"
            className={`w-[120px] h-[50px] flex items-center justify-center cursor-pointer ${getLinkClassName(
              "/About"
            )}`}
          >
            소개
          </Link>
          <Link
            to="/ReviewPage"
            className={`w-[120px] h-[50px] flex items-center justify-center cursor-pointer ${getLinkClassName(
              "/ReviewPage"
            )}`}
          >
            리뷰
          </Link>
          <Link
            to="/Forum"
            className={`w-[120px] h-[50px] flex items-center justify-center cursor-pointer ${getLinkClassName(
              "/Forum"
            )}`}
          >
            포럼
          </Link>
          <Link
            to="/Store"
            className={`w-[120px] h-[50px] flex items-center justify-center cursor-pointer ${getLinkClassName(
              "/Store"
            )}`}
          >
            상점
          </Link>
        </div>
        <div className="absolute top-[10px] right-[20px] flex justify-end items-center space-x-[30px]">
          <Link to="/MyPage" className="text-lg cursor-pointer">
            마이페이지
          </Link>
          <p className="text-lg">|</p>
          <span className="text-lg cursor-pointer">로그아웃</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
