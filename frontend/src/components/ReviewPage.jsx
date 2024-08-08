import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewModal from './ReviewModal';
import SearchField from './map/search/SearchField';
import AddressList from './map/search/AddressList';

const ReviewPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState([]);
  const [search, setSearch] = useState('');
  const [reviews, setReviews] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수 상태
  const reviewsPerPage = 8; // 페이지당 리뷰 수

  const access_token = 'your_access_token'; // 실제 액세스 토큰으로 대체해야 함

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/reviews`, 
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
            params: {
              page: currentPage,
              //limit: reviewsPerPage,
              limit: 3,
            },
          }
        );
        setReviews(response.data.reviews);
        setTotalPages(response.data.totalPages);
        
      } catch (error) {
        console.error('리뷰를 불러오는 중 오류 발생:', error);
      }
    };


    fetchReviews();
  }, [currentPage]);

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

      if (Array.isArray(data)) {
        setAddress(data);
      } else {
        console.error('Search result should be an array');
        setAddress([]);
      }
    });
  };

  const handleClickAddress = (place) => {
    setSelectedPlace(place);
  };

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

  const handleSaveReview = async (review) => {
    const userId = localStorage.getItem('userId'); // 로컬 스토리지에서 userId 가져오기
    const reviewData = {
      user_id: userId, // 로컬 스토리지에서 가져온 userId 사용
      content: review.text, // 리뷰 내용
      score: review.rating, // 평점
      business_name: "스타벅스 광화문점" // 비즈니스 이름
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/reviews`, reviewData);
      setReviews([response.data, ...reviews]);
      setAddress([]); // 리뷰 저장 후 주소 목록 초기화
      closeModal();
    } catch (error) {
      console.error('리뷰 등록 중 오류 발생:', error);
    }
  };

  // 페이지 번호 변경 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative m-auto mt-[45px] h-[1700px] w-[1400px] items-center">
        <div className="mb-[30px]">
          <div className="relative m-auto mb-[10px] flex h-[80px] w-[300px] flex-col items-center justify-center rounded-xl bg-[#365a31] text-[20px] font-bold text-white">
            <div className="text-[25px] font-bold">
              {selectedPlace ? selectedPlace.place_name : '상호명을 검색하세요'}
              <br />
            </div>
            <div className="text-[20px] font-normal">
              {selectedPlace ? selectedPlace.road_address_name : ''}
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-end">
              <div
                onClick={openModal}
                className="m-auto mb-[725px] ml-[550px] flex h-[40px] w-[300px] cursor-pointer items-center justify-center rounded-xl bg-[#D6EFD8] font-bold text-white hover:bg-[#508D4E]"
              >
                새로운 리뷰를 등록하기 +
              </div>

              <section className="flex h-[780px] w-[350px] justify-end gap-8">
                <div className="h-[80px] w-[350px] gap-[10px] border-[#365a31] p-4">
                  <SearchField
                    search={search}
                    onChange={handleChange}
                    onSearch={handleSearch}
                    showTooltip={false}
                  />
                  <AddressList
                    list={address}
                    onClickAddress={handleClickAddress}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="absolute top-[300px] grid grid-cols-4 gap-[30px]">
          {reviews.map((review, index) => (
            <div key={index} className="w-full border-2">
              <img
                src={review.imageSrc || 'default-image-url'}
                alt=""
                className="h-[250px] w-full object-cover"
              />
              <div className="mt-[10px] flex items-center justify-between p-[5px]">
                <div className="text-[20px] font-bold">{review.user_id}</div>
                <div>{review.score}/5.0</div>
                <div className="font-[#585858]">{review.createdAt ? review.createdAt.slice(0, 10) : '날짜 없음'}</div>
              </div>
              <p className="mt-[10px] p-[5px]">{review.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`mx-2 ${currentPage === i + 1 ? 'font-bold' : ''}`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
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