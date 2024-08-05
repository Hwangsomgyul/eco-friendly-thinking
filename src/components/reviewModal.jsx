import React, { useState } from 'react';
import Star from './Star';

const ReviewModal = ({ onClose, onSave }) => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSave = () => {
        if (text.length < 30) {
            alert('리뷰는 30자 이상이어야 합니다.');
            return;
        }

        // 이미지 파일을 URL로 변환하여 저장
        const imageSrc = imageFile ? URL.createObjectURL(imageFile) : '';

        // onSave 함수를 통해 부모 컴포넌트에 리뷰 데이터 전달
        onSave({ text, rating, imageSrc });
        onClose(); // 모달 닫기
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
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
                    <div className='flex justify-end mr-[15px]'>
                        <button className='p-2 border-2 rounded-full' onClick={onClose}>
                            X
                        </button>
                    </div>
                    <div className='flex-col m-[15px]'>
                        <p className='text-[20px] font-bold mb-[10px] flex justify-center'>
                            스타벅스 럭키비키점
                        </p>
                        <p className='flex justify-center'>서울 중구 퇴계로 100</p>
                        <div className='gap-[5px] flex justify-center text-[20px]'>
                            <Star totalStars={5} onRatingChange={(rating) => setRating(rating)} />
                        </div>
                    </div>
                </div>
                <div className='modal-body m-[15px]'>
                    <textarea
                        className='border-2 p-2 w-full h-[150px] resize-none'
                        placeholder='리뷰를 입력하세요... (30자 이상)'
                        value={text}
                        onChange={handleChange}
                    ></textarea>
                    <input type='file' onChange={handleFileChange} />
                    <div className='modal-footer mt-[10px] flex justify-end'>
                        <button className='bg-[#365a31] text-white p-2 rounded-lg' onClick={handleSave}>
                            리뷰 등록
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReviewModal;