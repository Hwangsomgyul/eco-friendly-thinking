import React, { useState } from 'react';
import Star from './Star';

const ReviewModal = ({ onClose }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div 
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
            onClick={onClose}
        >
            <section 
                className='bg-white rounded-lg w-[350px] h-[640px] border-2 flex flex-col justify-center'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='modal-header mt-[10px]'>
                    <div className="flex justify-end mr-[15px]">
                        <button 
                            className="p-2 border-2 rounded-full" 
                            onClick={onClose}
                        >
                            X
                        </button>
                    </div>
                    <div className="flex-col m-[15px]">
                        <p className="text-[20px] font-bold mb-[10px] flex justify-center">스타벅스 럭키비키점</p>
                        <p className="flex justify-center">서울 중구 퇴계로 100</p>
                        <div className="gap-[5px] flex justify-center text-[20px]">
                            <Star totalStars={5} />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="text-[#365a31]">내 리뷰 작성하기</button>
                        </div>
                    </div>
                </div>
                
                <div className='mt-[20px] m-[15px]'>
                    <div className='border-t border-[#D6EFD8] mt-4'></div>
                    <div className='mt-10 flex flex-col items-center'>
                        <textarea 
                            value={text} 
                            onChange={handleChange}
                            placeholder="장바구니, 텀블러, 다회용기 등 여러분의 경험을 공유해주세요.(30자 이상)"
                            className='w-[300px] h-[130px] border-4 rounded p-2'
                        ></textarea>
                        <div className='mt-[10px]'>
                            <input 
                                type="file" 
                                className='border-2 rounded bg-white'
                                placeholder='이미지를 올려주세요'
                            />
                        </div>
                        <p className='mt-[40px] font-bold text-[#365a31]'>리뷰는 15일 이내에 삭제할 수 있습니다.</p>
                        <div className="w-[80px] h-[30px] bg-[#365a31] m-auto mt-[20px] flex justify-center items-center rounded-xl">
                            <button className='text-white'>리뷰 등록</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReviewModal;
