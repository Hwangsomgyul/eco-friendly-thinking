import React from 'react';

const Footer = () => {
    return (
        <footer style={{background: 'linear-gradient(to bottom, #ffffff, #A8C8A8)'}} className='flex justify-center mt-16 w-full'>
            <div className='justify-center'>
                <div className='flex justify-center mt-16 space-x-32 text-lg font-bold cursor-pointer'>
                    <div className='text-white hover:text-gray-700'>약관·정책</div>
                    <div className='text-white hover:text-gray-700'>개인정보 처리 방침</div>
                    <div className='text-white hover:text-gray-700'>운영 정책</div>
                </div>
                <div className='mt-8 text-lightgray'>
                    <p><span className='font-bold'>㈜Lucky-Vicky </span>| <span className='font-bold'>대표이사:</span> 이현호 |<span className='font-bold'> 주소: </span>나영민지시 우현구 민관로 433, 솜귤 6층    |    <span className='font-bold'>사업자 등록 번호:</span> 144-81-00000</p>
                    <div className='flex mt-4'>
                        <p><span className='font-bold'>대표 번호:</span> 1566-1234</p>
                        <p className='whitespace-pre-wrap'>    |    </p>
                        <p><span className='font-bold'>FAX:</span> 031-8765-4321</p>
                        <p className='whitespace-pre-wrap'>    |    </p>
                        <p><span className='font-bold'>E-mail:</span> lucky_vicky@elice.io(본 메일은 수신 전용입니다)</p>
                    </div>
                </div>
                <div className='mt-8 text-lightgray'>
                    <div className='font-bold text-[#365a31]'>© Copyright 2024. eco-friendly-thinking. ALL RIGHTS RESERVED.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
