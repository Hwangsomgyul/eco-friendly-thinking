// MainPage.jsx
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';

import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';
// import KakaoMap from './KakaoMap';

const MainPage = () => {
  // const navigate = useNavigate();

    useEffect(() => {
        const loadKakaoMap = () => {
          // Script 추가
          const script = document.createElement('script');
          script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=df5c8b8d6500a3ce6d4151f4e4900ceb';
          script.async = true;
          
          script.onload = () => {
            console.log('Script loaded successfully');
            if (window.kakao && window.kakao.maps) {
              window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                if (mapContainer) {
                  const options = { 
                    center: new window.kakao.maps.LatLng(37.56000302825312, 126.97540593203321),
                    level: 3 
                  };
                  const map = new window.kakao.maps.Map(mapContainer, options);
      
                  const markerPosition = new window.kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
                  const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                  });
                  marker.setMap(map);
                } else {
                  console.error('Map container not found');
                }
              });
            } else {
              console.error('Kakao Maps not available');
            }
          };
          script.onerror = (error) => {
            console.error('Error loading script:', error);
          };
          document.head.appendChild(script);
        };
      
        loadKakaoMap();
      }, []);

      // const handleClick = () => {
      //   navigate('/Pagination');
      // };
      

  return (
    <div>
      <Header />
      <div className='w-[1400px] h-[1780px] mx-auto mt-[160px] justify-center'>
        <div title>
            <div className='flex font-bold text-[25px] text-[#365a31] items-center justify-center'>지구용사
                <p className='font-normal text-black'>님의 경험을 공유해주세요!</p>
            </div>
        </div>

        <div>
            <div className='flex items-center text-[15px] justify-center w-[1400px] h-[60px] mt-[30px] mb-[30px] mx-auto gap-[30px] rounded-md border-2 border-[#365a31]'>
                <p>24-07-31</p>
                <p>김민지민지 님의 종로구 무단투기 제보가 55개의 공감을 얻어 해당 구청에 민원 제기될 예정입니다!</p>
                <p>+50 point</p>
            </div>
        </div>

        
        <div className='flex relative w-full h-[780px] justify-end'>
            <div id='map' className=' w-[980px] h-[780px] absolute rounded-xl'></div>

            <div className='w-[400px] h-[780px] border-2 border-[#365a31] gap-[30px] absolute top-0 left-0'>
                <div option>
                    <div className='w-[270px] border-[#365a31]'>
                        <form onsubmit="searchPlaces(); return false;">
                            <input input-txt size15 value seoul/>
                            <button txt-btn>검색하기</button>
                            <p arrow-box>리뷰쓰고 20point</p>
                        </form>
                    </div>
                </div>
            </div>
            <ul id="placesList"></ul>
            <div id="pagination"></div>
        </div>

        <div className="w-full mx-auto bg-[#D6EFD8] mt-[40px] rounded-[4px] pb-[30px] relative" id="report-container">
      <div className="flex justify-between" id="reports">
        <div className="p-[30px]" id="report-success">
          <div className="w-[600px] h-[600px]" id="padding-30">
            <div id="left-word">
              <h1 className="text-[25px] font-bold">신고 완료</h1>
              <p className="text-[15px] mb-[30px]">
                30개 이상의 공감을 얻어 민원신고가 완료되었어요!<br />
                작성자는 30 포인트를 받을 수 있습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-[10px]" id="img-container1">
              <img src={image1} alt="Image 1" className="w-[180px] h-[180px] object-cover" />
              <img src={image2} alt="Image 2" className="w-[180px] h-[180px] object-cover" />
              <img src={image3} alt="Image 3" className="w-[180px] h-[180px] object-cover" />
              <img src={image4} alt="Image 4" className="w-[180px] h-[180px] object-cover" />
              <img src={image5} alt="Image 5" className="w-[180px] h-[180px] object-cover" />
              <img src={image6} alt="Image 6" className="w-[180px] h-[180px] object-cover" />
            </div>
          </div>
        </div>

        <div className="p-[30px]" id="report-latest">
          <div className="w-[600px] h-[600px]" id="padding-30">
            <div id="left-word">
              <h1 className="text-[25px] font-bold">최신 포럼</h1>
              <p className="text-[15px] mb-[30px]">
                지역구의 무단투기 현장을 찾아 제보하고 20 포인트를 받으세요! 30명의 동의를 얻으면 추가 포인트까지!
              </p>
            </div>
            <div className="flex flex-wrap gap-[10px]" id="img-container2">
              <img src={image7} alt="Image 7" className="w-[180px] h-[180px] object-cover" />
              <img src={image8} alt="Image 8" className="w-[180px] h-[180px] object-cover" />
              <img src={image9} alt="Image 9" className="w-[180px] h-[180px] object-cover" />
              <img src={image4} alt="Image 4" className="w-[180px] h-[180px] object-cover" />
              <img src={image1} alt="Image 1" className="w-[180px] h-[180px] object-cover" />
              <img src={image5} alt="Image 5" className="w-[180px] h-[180px] object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[25px] pb-[25px]">
        {/* <Link to='/MyPage'><button className="px-[20px] py-[10px] bg-[#365a31] text-white font-bold rounded">
          더보기
        </button></Link> */}
      </div>
    </div>

      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
