import React, { useState } from 'react';
import SearchField from './map/search/SearchField';
import KakaoMap from './map/KakaoMap';
import AddressList from './map/search/AddressList';
import Modal from './Modal';
import ReviewModal from './ReviewModal'; // 리뷰 모달 컴포넌트 import
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false); // 리뷰 모달 상태 추가

  const [search, setSearch] = useState(''); // 검색어 상태
  const [map, setMap] = useState(null);
  const [addresses, setAddresses] = useState([]); // 검색 결과 상태
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenReviewModal = () => setReviewModalOpen(true); // 리뷰 모달 열기 함수 추가
  const handleCloseReviewModal = () => setReviewModalOpen(false); // 리뷰 모달 닫기 함수 추가

  const handleCreateMap = (map) => {
    setMap(map);
  };

  const handleChange = (e) => { //
    setSearch(e.target.value);
  };

  const handleSearch = () => { //
    if (!search) {
      return;
    }

    // eslint-disable-next-line no-undef
    const ps = new window.kakao.maps.services.Places(); //

    ps.keywordSearch(search, (data, status, _pagination) => { //
      if (status !== window.kakao.maps.services.Status.OK) {
        return;
      } //

      const bounds = new window.kakao.maps.LatLngBounds();
      const markers = [];

      for (let i = 0; i < data.length; i++) {
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          content: data[i].place_name,
        });
        bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
      }

      setMarkers(markers);
      setAddresses(data); //

      map.setBounds(bounds);
    });
  };

  const handleClickAddress = (marker) => {
    setSelectedMarker(marker);
    handleOpenModal();
  };

  const handleSelectMarker = (marker) => {
    setSelectedMarker(marker);
  };

  const handleSaveReview = (review) => {
    console.log("Review saved:", review);
    setReviewModalOpen(false) // 리뷰 모달 닫기
  }

  return (
    <div>
      <div className='w-[1400px] h-[1900px] mx-auto mt-[100px] justify-center'>
        <div className='flex font-bold text-[25px] text-[#365a31] items-center justify-center'>
          지구용사
          <p className='font-normal text-black'> 님의 경험을 공유해 주세요!</p>
        </div>

        <div>
          <div className='flex items-center text-[15px] justify-center w-[1400px] h-[60px] mt-[30px] mb-[30px] mx-auto gap-[30px] rounded-md border-2 border-[#365a31]'>
            <p>24-07-31</p>
            <p>
              김민지민지 님의 종로구 무단 투기 제보가 55개의 공감을 얻어 해당
              구청에 민원 제기될 예정입니다!
            </p>
            <p>+ 50 point!</p>
          </div>
        </div>

        <section className="flex w-full h-[780px] justify-end gap-8 p-4">
          <div className="relative border-2 border-[#365a31] gap-[10px] p-4 h-[780px] w-[400px]">
            <SearchField
              search={search}
              onChange={handleChange}
              onSearch={handleSearch}
              showTooltip={true}
            />
            <AddressList list={addresses} onClickAddress={handleClickAddress} />
          </div>
          {open && (
            <Modal
              place_name={selectedMarker.place_name}
              road_address_name={selectedMarker.road_address_name}
              onClose={handleCloseModal}
              onOpenReviewModal={handleOpenReviewModal} // 모달에서 리뷰 모달 열기 함수 전달
            />
          )}
          <KakaoMap
            selectedMarker={selectedMarker}
            markers={markers}
            onSelectMarker={handleSelectMarker}
            onCreateMap={handleCreateMap}
          />
        </section>

        <div className='flex justify-center items-center mt-[40px]'>
          <Pagination />
        </div>

        <div
          className='w-full mx-auto flex flex-col justify-center items-center bg-[#D6EFD8] mt-[20px] rounded-[4px] pb-[30px] relative'
          id='report-container'
        >
          <div className='flex justify-between' id='reports'>
            <div className='p-[30px]' id='report-success'>
              <div className='w-[600px] h-[600px]' id='padding-30'>
                <div id='left-word'>
                  <h1 className='text-[25px] font-bold'>신고 완료</h1>
                  <p className='w-full text-[15px] mb-[30px]'>
                    30개 이상의 공감을 얻어 민원 신고가 완료되었어요!
                    <br />
                    작성자는 30 포인트를 받을 수 있습니다.
                  </p>
                </div>
                <div className='flex flex-wrap gap-[10px]' id='img-container1'>
                  <img
                    src={image1}
                    alt='Image 1'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image2}
                    alt='Image 2'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image3}
                    alt='Image 3'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image4}
                    alt='Image 4'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image5}
                    alt='Image 5'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image6}
                    alt='Image 6'
                    className='w-[180px] h-[180px] object-cover'
                  />
                </div>
              </div>
            </div>

            <div className='p-[30px]' id='report-latest'>
              <div className='w-[600px] h-[600px]' id='padding-30'>
                <div id='left-word'>
                  <h1 className='text-[25px] font-bold'>최신 포럼</h1>
                  <p className='flex text-[15px] mb-[30px]'>
                    지역구의 무단 투기 현장을 찾아 제보하고 20 포인트를 받으세요!
                    <br /> 30명의 동의를 얻으면 추가 포인트까지!
                  </p>
                </div>
                <div className='flex flex-wrap gap-[10px]' id='img-container2'>
                  <img
                    src={image7}
                    alt='Image 7'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image8}
                    alt='Image 8'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image9}
                    alt='Image 9'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image4}
                    alt='Image 4'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image1}
                    alt='Image 1'
                    className='w-[180px] h-[180px] object-cover'
                  />
                  <img
                    src={image5}
                    alt='Image 5'
                    className='w-[180px] h-[180px] object-cover'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <Link
              to='/Forum'
              className='px-[20px] py-[10px] bg-[#365a31] text-white font-bold rounded'
            >
              더보기
            </Link>
          </div>
        </div>
      </div>

      {reviewModalOpen && (
        <ReviewModal
          place_name={selectedMarker?.place_name} // 업체명 전달
          road_address_name={selectedMarker?.road_address_name} // 도로명 주소 전달
          onClose={handleCloseReviewModal} // 리뷰 모달 닫기 함수 전달
          onSave={handleSaveReview}
        />
      )}
    </div>
  );
};

export default MainPage;
