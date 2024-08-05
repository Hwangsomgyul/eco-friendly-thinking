import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ReviewModal from './ReviewModal';

const ReviewPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addr, setAddr] = useState('스타벅스 럭키비키점');
    const [search, setSearch] = useState('');
    const [reviews, setReviews] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        setAddr(search);
    };

    const handleSaveReview = (review) => {
        setReviews([review, ...reviews]);
    };

    return (
        <div>
            <Header />
            <div className='m-auto items-center w-[1400px] h-[1700px] mt-[45px]'>
                <div className='mb-[30px]'>
                    <div className='m-auto w-[300px] h-[80px] mb-[10px] rounded-xl flex flex-col justify-center items-center text-[20px] font-bold text-white bg-[#365a31]'>
                        {addr}
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div
                                onClick={openModal}
                                className='ml-[550px] m-auto flex justify-center items-center rounded-xl bg-[#D6EFD8] font-bold cursor-pointer hover:bg-[#508D4E] text-white w-[300px] h-[45px]'
                            >
                                새로운 리뷰를 등록하기 +
                            </div>
                            <div className='flex gap-[10px]'>
                                <input
                                    type='text'
                                    value={search}
                                    onChange={handleChangeSearch}
                                    className='rounded-xl border-2 p-[10px]'
                                    placeholder='검색어를 입력하세요'
                                />
                                <button
                                    type='button'
                                    onClick={handleSearch}
                                    className='bg-[#365a31] rounded-xl text-white cursor-pointer w-[60px] h-[45px] hover:bg-[#508D4E]'
                                >
                                    검색
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-[30px]'>
                    {reviews.map((review, index) => (
                        <div key={index} className='w-full'>
                            <img
                                src={review.imageSrc || 'default-image-url'} // 기본 이미지 URL 설정
                                alt=''
                                className='w-full h-[250px] object-cover'
                            />
                            <div className='flex justify-between mt-[10px] items-center p-[5px]'>
                                <div className='text-[20px] font-bold'>작성자</div>
                                <div>{review.rating}/5.0</div>
                                <div className='font-[#585858]'>2024-08-04</div>
                            </div>
                            <p className='mt-[10px] p-[5px]'>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && <ReviewModal onClose={closeModal} onSave={handleSaveReview} />}
            <Footer />
        </div>
    );
};

export default ReviewPage;
