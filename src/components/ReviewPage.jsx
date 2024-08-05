import React, { useState } from 'react';
import ReviewModal from './ReviewModal';

const ReviewPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addr, setAddr] = useState('스타벅스 럭키비키점');
  const [search, setSearch] = useState('');
  const [reviews, setReviews] = useState([]);

//  const handleChange = (e) => { //
//   setSearch(e.target.value);
//  };

//  const handleSearch = () => { //
//   if(!search) {
//     return;
//   }
//  }

//       const ps = new window.kakao.maps.services.Places(); //

//       ps.keywordSearch(search, (data, status, _pagination) => { //
//         if (status !== window.kakao.maps.services.Status.OK) {
//           return;
//         }

//         setAddresses(data); //
//       });



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
      <div className="m-auto mt-[45px] h-[1700px] w-[1400px] items-center">
        <div className="mb-[30px]">
          <div className="m-auto mb-[10px] flex h-[80px] w-[300px] flex-col items-center justify-center rounded-xl bg-[#365a31] text-[20px] font-bold text-white">
            {addr}
          </div>
          <div>
            <div className="flex items-center justify-center">
              <div
                onClick={openModal}
                className="m-auto ml-[550px] flex h-[45px] w-[300px] cursor-pointer items-center justify-center rounded-xl bg-[#D6EFD8] font-bold text-white hover:bg-[#508D4E]"
              >
                새로운 리뷰를 등록하기 +
              </div>


              <div className="flex gap-[10px]">
                <input
                  type="text"
                  value={search}
                  onChange={handleChangeSearch}
                  className="rounded-xl border-2 p-[10px]"
                  placeholder="검색어를 입력하세요"
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  className="h-[45px] w-[60px] cursor-pointer rounded-xl bg-[#365a31] text-white hover:bg-[#508D4E]"
                >
                  검색
                </button>
              </div>

              {/* // <section className="flex w-full h-[780px] justify-end gap-8">
                <div className="relative border-2 border-[#365a31] gap-[10px] p-4 h-[780px] w-[400px]">
                  <SearchField
                    search={search}
                    onChange={handleChange}
                    onSearch={handleSearch}
                  />
                  <AddressList list={addresses} onClickAddress={handleClickAddress} />
                </div>

              </section>*/ }


              
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          {reviews.map((review, index) => (
            <div key={index} className="w-full">
              <img
                src={review.imageSrc || 'default-image-url'} // 기본 이미지 URL 설정
                alt=""
                className="h-[250px] w-full object-cover"
              />
              <div className="mt-[10px] flex items-center justify-between p-[5px]">
                <div className="text-[20px] font-bold">작성자</div>
                <div>{review.rating}/5.0</div>
                <div className="font-[#585858]">2024-08-04</div>
              </div>
              <p className="mt-[10px] p-[5px]">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        // FIXME: place_name, road_address_name 내용을 전달해 주어야 함
        <ReviewModal
          place_name=""
          road_address_name=""
          onClose={closeModal}
          onSave={handleSaveReview}
        />
      )}
    </div>
  );
};

export default ReviewPage;
