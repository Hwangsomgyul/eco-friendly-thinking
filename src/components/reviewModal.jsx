import React, { useState } from 'react';
import Star from './Star';

import SearchField from './map/search/SearchField';
import AddressList from './map/search/AddressList';

const ReviewModal = ({ place_name, road_address_name, onClose, onSave }) => {
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
    } else {
      alert('리뷰가 저장되었어요');
    }
   
    

    // 생성된 Blob URL을 상태에 저장
    const imageSrc = imageFile ? URL.createObjectURL(imageFile) : '';

    onSave({ text, rating, imageSrc });
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <section
        className="flex h-[640px] w-[350px] flex-col justify-center rounded-lg border-2 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header mt-[10px]">
          <div className="mr-[15px] flex justify-end">
            <button className="rounded-full border-2 p-2" onClick={onClose}>
              X
            </button>
          </div>
          <div className="m-[15px] flex-col">
            <p className="mb-[10px] flex justify-center text-[20px] font-bold">
              {place_name}
            </p>
            <p className="flex justify-center">{road_address_name}</p>
            <div className="flex justify-center gap-[5px] text-[20px]">
              <Star
                totalStars={5}
                onRatingChange={(rating) => setRating(rating)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="text-[#365a31]">내 리뷰 작성하기</button>
            </div>
          </div>
        </div>

        <div className="m-[15px] mt-[20px]">
          <div className="mt-4 border-t border-[#D6EFD8]"></div>
          <div className="mt-10 flex flex-col items-center">
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="장바구니, 텀블러, 다회용기 등 여러분의 경험을 공유해주세요.(30자 이상)"
              className="h-[130px] w-[300px] rounded border-4 p-2"
            ></textarea>
            <div className="mt-[10px]">
              <input
                type="file"
                onChange={handleFileChange}
                className="rounded border-2 bg-white"
                placeholder="이미지를 올려주세요"
              />
            </div>
            <p className="mt-[40px] font-bold text-[#365a31]">
              리뷰는 15일 이내에 삭제할 수 있습니다.
            </p>
            <div className="m-auto mt-[20px] flex h-[30px] w-[80px] items-center justify-center rounded-xl bg-[#365a31]">
              <button onClick={handleSave} className="text-white">
                리뷰 등록
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewModal;
