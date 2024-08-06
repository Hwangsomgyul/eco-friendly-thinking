import React, { useState } from 'react';
import ReviewModal from './ReviewModal';
import SearchField from './map/search/SearchField';
import AddressList from './map/search/AddressList';

const ReviewPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState([]); // 초기값을 빈 배열로 설정
  const [search, setSearch] = useState('');
  const [reviews, setReviews] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (!search) {
      return;
    }

    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status !== window.kakao.maps.services.Status.OK) {
        return;
      }

      // 데이터가 배열인지 확인하고 설정
      if (Array.isArray(data)) {
        setAddress(data);
      } else {
        console.error('Search result should be an array');
        setAddress([]);
      }
    });
  };


  // 목록 클릭 시 모달을 열지 않고 상호명과 주소만 업데이트
  const handleClickAddress = (place) => {
    setSelectedPlace(place);
    // setIsModalOpen(true); // 모달은 여기서 열지 않음
  };

  // 주소 없이 클릭시 주소부터 먼저 검색하도록 유도
  const openModal = () => {
    if (!search) {
      alert('주소를 검색해 주세요');
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveReview = (review) => {
    setReviews([review, ...reviews]);
    setAddress([]); // 리뷰 저장 후 주소 목록 초기화
    closeModal();
  };

  return (
    <div>
      <div className="relative m-auto mt-[45px] h-[1700px] w-[1400px] items-center">
        <div className="mb-[30px]">
          <div className="relative m-auto mb-[10px] flex h-[80px] w-[300px] flex-col items-center justify-center rounded-xl bg-[#365a31] text-[20px] font-bold text-white">
            {/* 현재 주소의 목록을 보여주기 */}
            <div className="text-[25px] font-bold">{selectedPlace ? selectedPlace.place_name : '상호명을 검색하세요'}<br/></div>
            <div className="text-[20px] font-normal">{selectedPlace ? selectedPlace.road_address_name : ''}</div>
          </div>
          <div>
            <div className="flex relative items-center justify-end">
              <div
                onClick={openModal}
                className="m-auto ml-[550px] mb-[725px] flex h-[40px] w-[300px] cursor-pointer items-center justify-center rounded-xl bg-[#D6EFD8] font-bold text-white hover:bg-[#508D4E]"
              >
                새로운 리뷰를 등록하기 +
              </div>

              <section className="flex w-[350px] h-[780px] justify-end gap-8">
                <div className="border-[#365a31] gap-[10px] p-4 h-[80px] w-[350px]">
                  <SearchField
                    search={search}
                    onChange={handleChange}
                    onSearch={handleSearch}
                    showTooltip={false}
                  />
                  <AddressList list={address} onClickAddress={handleClickAddress} />
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="absolute top-[300px] grid grid-cols-4 gap-[30px]"> {/* 저장된 데이터 컨테이너의 top 값을 조정 */}
          {reviews.map((review, index) => (
            <div key={index} className="w-full border-2">
              <img
                src={review.imageSrc || 'default-image-url'}
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
        <ReviewModal
          place_name={selectedPlace?.place_name || ''}
          road_address_name={selectedPlace?.road_address_name || ''}
          onClose={closeModal}
          onSave={handleSaveReview}
        />
      )}
    </div>
  );
};

export default ReviewPage;
