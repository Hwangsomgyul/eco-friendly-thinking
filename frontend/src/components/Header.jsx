import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // 현재 경로에 따라 활성화 상태를 결정하는 함수
  const getLinkClassName = (path) => {
    const mainPath = location.pathname.split('/');
    const nowPath = '/' + mainPath[1];

    return nowPath === path
      ? 'bg-white text-black rounded-t-lg'
      : 'text-white hover:bg-ghostwhite';
  };

  return (
    <header className="relative flex h-[180px] w-full items-start justify-between bg-[#365a31] pb-0 pl-[15px] pr-[20px] pt-[10px] text-white">
      <Link className="flex items-center space-x-2" to="/MainPage">
        <img src="/logo.png" alt="Logo" className="h-[150px] w-[227px]" />
      </Link>
      <div className="h-full w-full">
        <div className="mt-[130px] flex items-start space-x-2 text-lg">
          <Link
            to="/MainPage"
            className={`flex h-[50px] w-[120px] cursor-pointer items-center justify-center ${getLinkClassName(
              '/MainPage',
            )}`}
          >
            홈
          </Link>
          <Link
            to="/About"
            className={`flex h-[50px] w-[120px] cursor-pointer items-center justify-center ${getLinkClassName(
              '/About',
            )}`}
          >
            소개
          </Link>
          <Link
            to="/ReviewPage"
            className={`flex h-[50px] w-[120px] cursor-pointer items-center justify-center ${getLinkClassName(
              '/ReviewPage',
            )}`}
          >
            리뷰
          </Link>
          <Link
            to="/Forum"
            className={`flex h-[50px] w-[120px] cursor-pointer items-center justify-center ${getLinkClassName(
              '/Forum',
            )}`}
          >
            포럼
          </Link>
          <Link
            to="/Store"
            className={`flex h-[50px] w-[120px] cursor-pointer items-center justify-center ${getLinkClassName(
              '/Store',
            )}`}
          >
            상점
          </Link>
        </div>
        <div className="absolute right-[20px] top-[10px] flex items-center justify-end space-x-[30px]">
          <Link to="/MyPage" className="cursor-pointer text-lg">
            마이페이지
          </Link>
          <p className="text-lg">|</p>
          <span className="cursor-pointer text-lg">로그아웃</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
