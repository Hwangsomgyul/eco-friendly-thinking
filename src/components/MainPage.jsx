import React, { useEffect, useState } from 'react';
import './mainPage.css';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
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
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태를 관리
  const [map, setMap] = useState(null); // 지도 관리
  const [markers, setMarkers] = useState([]); // 지도에 표시된 마커 관리
  const [kakaoLoaded, setKakaoLoaded] = useState(false); // 카카오맵 sdk
  const [places, setPlaces] = useState([]); // 검색 결과 저장

  useEffect(() => {
    const loadKakaoMap = () => {
      const script = document.createElement('script');
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=df5c8b8d6500a3ce6d4151f4e4900ceb';
      script.async = true;

      script.onload = () => {
        console.log('Kakao Maps SDK loaded');
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            console.log('Kakao Maps loaded');

            const mapContainer = document.getElementById('map');
            if (mapContainer) {
              const options = {
                center: new window.kakao.maps.LatLng(37.56000302825312, 126.97540593203321),
                level: 3,
              };
              const mapInstance = new window.kakao.maps.Map(mapContainer, options);
              setMap(mapInstance);
              setKakaoLoaded(true);

              window.kakao.maps.event.addListener(mapInstance, 'click', (mouseEvent) => {
                const latlng = mouseEvent.latLng;

                const marker = new window.kakao.maps.Marker({
                  map: mapInstance,
                  position: latlng,
                });

                const infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="padding:5px;font-size:12px;">클릭한 위치입니다</div>`,
                });

                window.kakao.maps.event.addListener(marker, 'click', () => {
                  infowindow.open(mapInstance, marker);
                });

                markers.forEach(m => m.setMap(null));
                setMarkers([marker]);
              });
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm.trim() || !kakaoLoaded) return;

    if (!window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
      console.error('Kakao Maps Services not available');
      return;
    }

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(searchTerm, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);

        const newMarkers = data.map(place => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });

          window.kakao.maps.event.addListener(marker, 'click', () => {
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
            });
            infowindow.open(map, marker);
          });

          return marker;
        });

        setMarkers(newMarkers);

        const bounds = new window.kakao.maps.LatLngBounds();
        data.forEach(place => {
          bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
        });
        map.setBounds(bounds);

        setPlaces(data);
      } else {
        console.error('Search failed:', status);
      }
    });
  };

  return (
    <div>
      <Header />
      <div className='w-[1400px] h-[1900px] mx-auto mt-[100px] justify-center'>
        <div className='flex font-bold text-[25px] text-[#365a31] items-center justify-center'>
          지구용사
          <p className='font-normal text-black'>님의 경험을 공유해주세요!</p>
        </div>

        <div>
          <div className='flex items-center text-[15px] justify-center w-[1400px] h-[60px] mt-[30px] mb-[30px] mx-auto gap-[30px] rounded-md border-2 border-[#365a31]'>
            <p>24-07-31</p>
            <p>김민지민지 님의 종로구 무단투기 제보가 55개의 공감을 얻어 해당 구청에 민원 제기될 예정입니다!</p>
            <p>+50 point</p>
          </div>
        </div>

        <div className='flex relative w-full h-[780px] justify-end'>
          <div id='map' className='w-[980px] h-[780px] absolute rounded-xl'></div>

          <div id="menu_wrap" className='w-[400px] h-[780px] border-2 border-[#365a31] gap-[10px] absolute top-0 left-0 p-4'>
            <form onSubmit={handleSearchSubmit} className="flex flex-col gap-3 mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="검색어를 입력하세요"
                className="border-2 rounded p-2 w-full h-[40px]"
              />
              <button
                type="submit"
                className="bg-[#365a31] text-white py-2 rounded w-full h-[40px]"
              >
                검색하기
              </button>
            </form>

            {/* 검색 결과 목록 */}
            {places.length > 0 && (
              <div className="search-results max-h-[600px] overflow-y-auto bg-white border-2 border-[#365a31] rounded-md p-2">
                <h2 className="text-lg font-bold mb-2">검색 결과</h2>
                <ul className="list-none">
                  {places.map(place => (
                    <li key={place.id} className="border-b py-2">
                      <p className="font-semibold">{place.place_name}</p>
                      <p className="text-sm text-gray-600">{place.address_name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className='flex justify-center items-center mt-[40px]'>
          <Pagination />
        </div>

        <div className="w-full mx-auto flex flex-col justify-center items-center bg-[#D6EFD8] mt-[20px] rounded-[4px] pb-[30px] relative" id="report-container">
          <div className="flex justify-between" id="reports">
            <div className="p-[30px]" id="report-success">
              <div className="w-[600px] h-[600px]" id="padding-30">
                <div id="left-word">
                  <h1 className="text-[25px] font-bold">신고 완료</h1>
                  <p className="w-full text-[15px] mb-[30px]">
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
                  <p className="flex text-[15px] mb-[30px]">
                    지역구의 무단투기 현장을 찾아 제보하고 20 포인트를 받으세요!<br /> 30명의 동의를 얻으면 추가 포인트까지!
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

          <div className="flex justify-center items-center">
            <Link to="/ReviewPage" className="px-[20px] py-[10px] bg-[#365a31] text-white font-bold rounded">
              더보기
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
