import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ReviewModal from './ReviewModal';

import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'

const ReviewPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header />
            <div className='m-auto items-center w-[1400px] h-[1700px] mt-[45px]'>
                <div className='mb-[30px]'>
                    <div className='m-auto w-[300px] h-[80px] mb-[10px] rounded-xl flex flex-col justify-center items-center text-[20px] font-bold text-white bg-[#365a31]'>
                        스타벅스 럭키비키점<br />
                        <div className='text-[15px] font-normal'>서울 중구 퇴계로 100</div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div onClick={openModal} className='ml-[550px] m-auto flex justify-center items-center rounded-xl bg-[#D6EFD8] font-bold cursor-pointer hover:bg-[#508D4E] text-white w-[300px] h-[45px]'>
                                새로운 리뷰를 등록하기 +
                            </div>
                            <div className='flex gap-[10px]'>
                                <input className='rounded-xl border-2 p-[10px]' placeholder="검색어를 입력하세요" />
                                <button className='bg-[#365a31] rounded-xl font-white cursor-pointer w-[60px] h-[45px]'>검색</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-[1400px] h-[1500px] flex justify-center'>
                    <div className='flex gap-[30px]'>
                        <div className='w-[300px]'>
                            <img src={image1} alt="" className='w-[300px] h-[250px]' />
                            <div className='flex justify-between mt-[20px] items-center p-[5px]'>
                                <div className='text-[20px] font-bold'>엘리스</div>
                                <div>2.0/5.0</div>
                                <div className='font-[#585858]'>2024-08-03</div>
                            </div>
                            <p className='mt-[10px] p-[5px]'>안녕하세요 여기는 다회용기를 잘 사용해요
                                테스트 용입니다 30자 이상을 넘겨야 해요
                                프로젝트 2차 개발중이예요
                                공간 및 간격을 조정하고 있어요
                                양 옆 및 아래위 간격을 조정중입니다</p>
                        </div>
                        <div className='w-[300px]'>
                            <img src={image2} alt="" className='w-[300px] h-[250px]' />
                            <div className='flex justify-between mt-[20px] items-center p-[5px]'>
                                <div className='text-[20px] font-bold'>엘리스</div>
                                <div>2.0/5.0</div>
                                <div className='font-[#585858]'>2024-08-03</div>
                            </div>
                            <p className='mt-[10px] p-[5px]'>안녕하세요 여기는 다회용기를 잘 사용해요
                                테스트 용입니다 30자 이상을 넘겨야 해요
                                프로젝트 2차 개발중이예요
                                공간 및 간격을 조정하고 있어요
                                양 옆 및 아래위 간격을 조정중입니다</p>
                        </div>
                        <div className='w-[300px]'>
                            <img src={image3} alt="" className='w-[300px] h-[250px]' />
                            <div className='flex justify-between mt-[20px] items-center p-[5px]'>
                                <div className='text-[20px] font-bold'>엘리스</div>
                                <div>2.0/5.0</div>
                                <div className='font-[#585858]'>2024-08-03</div>
                            </div>
                            <p className='mt-[10px] p-[5px]'>안녕하세요 여기는 다회용기를 잘 사용해요
                                테스트 용입니다 30자 이상을 넘겨야 해요
                                프로젝트 2차 개발중이예요
                                공간 및 간격을 조정하고 있어요
                                양 옆 및 아래위 간격을 조정중입니다</p>
                        </div>
                        <div className='w-[300px]'>
                            <img src={image4} alt="" className='w-[300px] h-[250px]' />
                            <div className='flex justify-between mt-[20px] items-center p-[5px]'>
                                <div className='text-[20px] font-bold'>엘리스</div>
                                <div>2.0/5.0</div>
                                <div className='font-[#585858]'>2024-08-03</div>
                            </div>
                            <p className='mt-[10px] p-[5px]'>안녕하세요 여기는 다회용기를 잘 사용해요
                                테스트 용입니다 30자 이상을 넘겨야 해요
                                프로젝트 2차 개발중이예요
                                공간 및 간격을 조정하고 있어요
                                양 옆 및 아래위 간격을 조정중입니다</p>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <ReviewModal onClose={closeModal} />}
            <Footer />
        </div>
    );
}

export default ReviewPage;
