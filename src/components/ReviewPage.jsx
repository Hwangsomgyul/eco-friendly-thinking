import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewModal from './reviewModal';

const ReviewPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addr, setAddr] = useState('스타벅스 럭키비키점');
  const [search, setSearch] = useState('');
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수 상태
  const reviewsPerPage = 8; // 페이지당 리뷰 수

  const access_token = 'your_access_token'; // 실제 액세스 토큰으로 대체해야 함

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews', {
          headers: {
            Authorization: `Bearer ${access_token}`, // 인증 토큰 추가
          },
          params: {
            page: currentPage,
            limit: reviewsPerPage,
          },
        });
        setReviews(response.data.reviews);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('리뷰를 불러오는 중 오류 발생:', error);
      }
    };

    fetchReviews();
  }, [currentPage]);

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

  const handleSaveReview = async (review) => {
    try {
      const response = await axios.post('/api/reviews', review, {
        headers: {
          Authorization: `Bearer ${access_token}`, // 인증 토큰 추가
        },
      });
      setReviews([response.data, ...reviews]);
    } catch (error) {
      console.error('리뷰 등록 중 오류 발생:', error);
    }
  };

  // 페이지 번호 변경 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="m-auto items-center w-[1400px] h-[1700px] mt-[45px]">
        <div className="mb-[30px]">
          <div className="m-auto w-[300px] h-[80px] mb-[10px] rounded-xl flex flex-col justify-center items-center text-[20px] font-bold text-white bg-[#365a31]">
            {addr}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div
                onClick={openModal}
                className="ml-[550px] m-auto flex justify-center items-center rounded-xl bg-[#D6EFD8] font-bold cursor-pointer hover:bg-[#508D4E] text-white w-[300px] h-[45px]"
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
                  className="bg-[#365a31] rounded-xl text-white cursor-pointer w-[60px] h-[45px] hover:bg-[#508D4E]"
                >
                  검색
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-[30px]">
          {reviews.map((review, index) => (
            <div key={index} className="w-full">
              <img
                src={review.photo_url || 'default-image-url'} // 기본 이미지 URL 설정
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <div className="flex justify-between mt-[10px] items-center p-[5px]">
                <div className="text-[20px] font-bold">{review.author_name}</div>
                <div>{review.score}/5.0</div>
                <div className="font-[#585858]">{new Date(review.created_at).toLocaleDateString()}</div>
              </div>
              <p className="mt-[10px] p-[5px]">{review.content}</p>
            </div>
          ))}
        </div>

        {/* 페이지네이션 섹션 */}
        <div className="pagination mt-4 flex justify-center">
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={`cursor-pointer px-2 ${currentPage === i + 1 ? 'font-bold' : ''}`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
      {isModalOpen && <ReviewModal onClose={closeModal} onSave={handleSaveReview} />}
    </div>
  );
};

export default ReviewPage;
