import React from 'react';
import logo from './logo.png';

const Header = () => {
    return (
        <header className='flex justify-between items-start bg-[#365a31] pt-[10px] pr-[20px] pb-0 pl-[15px] text-white w-full h-[180px] relative'>
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="w-[200px] h-[150px]" />
            </div>
            <div className="w-full h-full">
                <div className='flex text-lg font-bold items-start mt-[130px] space-x-2'>
                    <span className="bg-white rounded-t-lg w-[120px] h-[50px] flex items-center justify-center text-black cursor-pointer hover:bg-ghostwhite">홈</span>
                    <span className="w-[120px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-ghostwhite">소개</span>
                    <span className="w-[120px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-ghostwhite">리뷰</span>
                    <span className="w-[120px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-ghostwhite">포럼</span>
                    <span className="w-[120px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-ghostwhite">상점</span>
                </div>
                <div className='absolute top-[10px] right-[20px] flex justify-end items-center space-x-[30px]'>
                    <span className='text-lg cursor-pointer'>마이페이지</span>
                    <p className='text-lg'>|</p>
                    <span className='text-lg cursor-pointer'>로그아웃</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
