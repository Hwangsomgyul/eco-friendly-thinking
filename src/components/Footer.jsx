import React from 'react';
import logo from './logo.png'

const Footer = () => {
    return (
        <footer className='flex justify-center bg-[#A8C8A8] mt-16 w-full h-514'>
            <div className='mt-10 justify-center'>
                <div className='flex space-x-8 items-center justify-center mt-12'>
                    <div className='text-white font-bold text-3xl'>Eco-Friendly-Thinking</div>
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                </div>
                <div className='flex justify-center mt-16 space-x-32 text-lg font-bold cursor-pointer'>
                    <div className='text-white hover:text-gray-700'>약관/정책</div>
                    <div className='text-white hover:text-gray-700'>개인정보처리방침</div>
                    <div className='text-white hover:text-gray-700'>운영정책</div>
                </div>
                <div className='mt-8 text-lightgray'>
                    <p>(주)엘리스 대표이사: 김재원 서울특별시 강남구 선릉로 433, 신관 6층</p>
                    <p className='mt-4'>사업자등록번호:144-81-00000</p>
                    <div className='flex mt-4'>
                        <p>대표번호:1566-1234</p>
                        <p className='whitespace-pre-wrap'>    |    </p>
                        <p>FAX:031-8765-4321</p>
                        <p className='whitespace-pre-wrap'>    |    </p>
                        <p>E-mail:contact@elice.io(본 메일은 수신 전용입니다)</p>
                    </div>
                </div>
                <div className='mt-8 text-lightgray'>
                    <div>© Copyright 2024. eco-friendly thinking. ALL RIGHTS RESERVED</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
