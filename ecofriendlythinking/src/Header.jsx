import React from 'react';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#365a31] px-6 py-3 text-white w-full">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <span className="text-lg font-bold">eco-friendly thinking</span>
      </div>
      <div className="flex items-center space-x-8">
        <span className="cursor-pointer">홈</span>
        <div className="relative group">
          <span className="cursor-pointer">소개</span>
          <div className="absolute hidden group-hover:block bg-[#365a31] p-2 mt-1 rounded shadow-lg">
            <div className="flex flex-col">
              <span className="cursor-pointer mb-2">소개</span>
              <span className="cursor-pointer mb-2">현황</span>
              <span className="cursor-pointer">도움말</span>
            </div>
          </div>
        </div>
        <span className="cursor-pointer">리뷰</span>
        <span className="cursor-pointer border border-white rounded-md px-3 py-1 bg-white text-[#365a31]">
          포럼
        </span>
        <div className="flex space-x-4">
          <span className="cursor-pointer">마이페이지</span>
          <span className="cursor-pointer">로그아웃</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
