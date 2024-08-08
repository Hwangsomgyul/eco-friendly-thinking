// src/components/Forum.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { read, utils } from 'xlsx'; // Named import로 수정
import boxOk from '../images/boxOk.svg'; // 이미지 파일 import
import boxNotOk from '../images/boxNotOk.svg'; // 이미지 파일 import

const Forum = () => {
  const [selectedGu, setSelectedGu] = useState('강남구');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [totalPages, setTotalPages] = useState(1); // totalPages 상태 추가
  const postsPerPage = 5; // 페이지당 게시글 수
  const access_token = 'your_access_token'; // 실제 액세스 토큰으로 대체

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  // 이미지 업로드
  const handleImageUpload = (event) => {
    // 파일 업로드
    console.log(event.target.files[0]);
  };

  const handlePostSubmit = () => {
    if (description.trim()) {
      const newPost = {
        id: posts.length + 1,
        region: selectedGu,
        date: new Date().toISOString(),
        content: description,
        views: 0,
        author: {
          name: '닉네임',
          avatar: '',
        },
      };
      setPosts([newPost, ...posts]); // 새로운 게시글을 앞에 추가
      setDescription(''); // 입력 필드 초기화
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const guList = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/community', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          params: {
            page: currentPage,
            limit: postsPerPage,
            filter: selectedGu, // 선택된 구를 필터로 사용
          },
        });
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('게시글을 불러오는 중 오류 발생:', error);
      }
    };

    fetchPosts();
  }, [currentPage, selectedGu]);

  useEffect(() => {
    const loadKakaoMap = () => {
      const script = document.createElement('script');
      script.src =
        'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=df5c8b8d6500a3ce6d4151f4e4900ceb';
      script.async = true;

      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            if (mapContainer) {
              const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.978),
                level: 3,
              };
              const map = new window.kakao.maps.Map(mapContainer, options);

              const markerPosition = new window.kakao.maps.LatLng(
                37.5665,
                126.978,
              );
              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
              });
              marker.setMap(map);
            }
          });
        }
      };

      script.onerror = (error) => {
        console.error('Error loading script:', error);
      };

      document.head.appendChild(script);
    };

    loadKakaoMap();
  }, []);

  const mapSettings = {
    강남구: { center: { lat: 37.4979, lng: 127.0276 }, level: 6 },
    강동구: { center: { lat: 37.5303, lng: 127.1224 }, level: 6 },
    강북구: { center: { lat: 37.6391, lng: 127.0254 }, level: 6 },
    강서구: { center: { lat: 37.5502, lng: 126.8499 }, level: 6 },
    관악구: { center: { lat: 37.4848, lng: 126.9516 }, level: 6 },
    광진구: { center: { lat: 37.5387, lng: 127.0724 }, level: 6 },
    구로구: { center: { lat: 37.4958, lng: 126.8821 }, level: 6 },
    금천구: { center: { lat: 37.4577, lng: 126.9008 }, level: 6 },
    노원구: { center: { lat: 37.6544, lng: 127.055 }, level: 6 },
    도봉구: { center: { lat: 37.6688, lng: 127.0369 }, level: 6 },
    동대문구: { center: { lat: 37.5735, lng: 127.039 }, level: 6 },
    동작구: { center: { lat: 37.5034, lng: 126.9374 }, level: 6 },
    마포구: { center: { lat: 37.5666, lng: 126.9067 }, level: 6 },
    서대문구: { center: { lat: 37.5796, lng: 126.9364 }, level: 6 },
    서초구: { center: { lat: 37.4831, lng: 127.0328 }, level: 6 },
    성동구: { center: { lat: 37.5633, lng: 127.0364 }, level: 6 },
    성북구: { center: { lat: 37.5894, lng: 127.0182 }, level: 6 },
    송파구: { center: { lat: 37.5147, lng: 127.106 }, level: 6 },
    양천구: { center: { lat: 37.5161, lng: 126.865 }, level: 6 },
    영등포구: { center: { lat: 37.5262, lng: 126.9026 }, level: 6 },
    용산구: { center: { lat: 37.5326, lng: 126.9901 }, level: 6 },
    은평구: { center: { lat: 37.6068, lng: 126.9296 }, level: 6 },
    종로구: { center: { lat: 37.572, lng: 126.9794 }, level: 6 },
    중구: { center: { lat: 37.5636, lng: 126.9977 }, level: 6 },
    중랑구: { center: { lat: 37.6068, lng: 127.0928 }, level: 6 },
  };

  const handleShowTrashMarkers = async () => {
    const excelFile = '/datas/쓰레기통 좌표 데이터_240730.xlsx'; // 엑셀 파일 경로 설정
    // const excelFile2 = 'datas/CCTVPlace.xlsx'; // CCTV 파일 경로

    try {
      const response = await axios.get(excelFile, {
        responseType: 'arraybuffer',
      });
      const data = new Uint8Array(response.data);
      const workbook = read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = utils.sheet_to_json(sheet);

      const positions = json
        // .filter(row => row['구'] === selectedGu) // 선택된 구에 맞게 필터링 여기 추가!!!
        .map((row) => ({
          lat: row['위도'], // 엑셀의 열 이름에 맞게 수정
          lng: row['경도'], // 엑셀의 열 이름에 맞게 수정
        }));

      // 카카오맵에 마커 추가 여기 변경
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        if (mapContainer && window.kakao.maps) {
          const { center, level } =
            mapSettings[selectedGu] || mapSettings['강남구']; // 기본값으로 강남구 설정

          const map = new window.kakao.maps.Map(mapContainer, {
            center: new window.kakao.maps.LatLng(center.lat, center.lng),
            level: level,
          });

          positions.forEach((position) => {
            const markerPosition = new window.kakao.maps.LatLng(
              position.lat,
              position.lng,
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
          });
        }
      });
    } catch (error) {
      console.error('Error reading excel file:', error);
    }
  };

  const handleShowCCTVMarkers = async () => {
    const excelFile2 = '/datas/12_04_08_E_CCTV정보2.xlsx'; // 엑셀 파일 경로 설정
    // const excelFile2 = 'datas/CCTVPlace.xlsx'; // CCTV 파일 경로

    try {
      const response = await axios.get(excelFile2, {
        responseType: 'arraybuffer',
      });
      const data = new Uint8Array(response.data);
      const workbook = read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = utils.sheet_to_json(sheet);

      const positions = json
        // .filter(row => row['구'] === selectedGu) // 선택된 구에 맞게 필터링 여기 추가!!!
        .map((row) => ({
          lat: row['WGS84위도'], // 엑셀의 열 이름에 맞게 수정
          lng: row['WGS84경도'], // 엑셀의 열 이름에 맞게 수정
        }));

      // 카카오맵에 마커 추가 여기 변경
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        if (mapContainer && window.kakao.maps) {
          const { center, level } =
            mapSettings[selectedGu] || mapSettings['강남구']; // 기본값으로 강남구 설정

          const map = new window.kakao.maps.Map(mapContainer, {
            center: new window.kakao.maps.LatLng(center.lat, center.lng),
            level: level,
          });

          positions.forEach((position) => {
            const markerPosition = new window.kakao.maps.LatLng(
              position.lat,
              position.lng,
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
          });
        }
      });
    } catch (error) {
      console.error('Error reading excel file:', error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div className="relative mx-auto mt-[110px] h-[1780px] w-[1400px] gap-[25px]">
        <div className="flex h-[430px] w-full gap-[20px]">
          <div id="map" className="relative z-0 h-[430px] w-[1000px]">
            <div className="relative z-10 m-2 flex gap-[10px]">
              <button
                onClick={handleShowTrashMarkers}
                className="h-[80px] w-[80px] rounded bg-[#365a31] p-2 text-white"
              >
                쓰레기통
              </button>
              <button
                onClick={handleShowCCTVMarkers}
                className="h-[80px] w-[80px] rounded bg-[#365a31] p-2 text-white"
              >
                CCTV
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between gap-[10px]">
              <p className="text-[22px]">무단 투기 신고 지역</p>
              <div className="region-selector mt-4">
                <select
                  className="w-full rounded border border-gray-300 p-2 md:w-auto"
                  value={selectedGu}
                  onChange={(e) => setSelectedGu(e.target.value)}
                >
                  {guList.map((gu) => (
                    <option key={gu} value={gu}>
                      {gu}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-[20px] flex justify-between">
              <p>동일한 내용의 게시글이 이미 등록되어 있나요?</p>
              <div className="item-center relative flex">
                <img
                  src={clicked ? boxOk : boxNotOk}
                  alt="box image"
                  className="h-[30px] w-[30px] cursor-pointer object-cover"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                />
                <p
                  className={`absolute left-full ml-4 transition-opacity duration-300`}
                  style={{ zIndex: 10, color: 'black', opacity: hover ? 1 : 0 }}
                >
                  + 10 point!
                </p>
              </div>
            </div>
            <div className="mt-[15px] flex gap-[10px]">
              <div
                className="flex h-[220px] w-[230px] cursor-pointer items-center justify-center bg-[#D6EFD8] text-[20px]"
                onClick={() => document.getElementById('fileUpload').click()}
              >
                image upload
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>

              <textarea
                className="h-320px mb-4 w-full rounded border border-gray-300 p-2"
                placeholder="구체적인 상황과 위치를 첨부한 사진에 대해 설명해 주세요."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <div className="relative flex items-center">
                <div
                  className="mt-[5px] flex h-[40px] w-[80px] cursor-pointer justify-center rounded border-2 bg-[#365a31] hover:bg-[#508D4E]"
                  onClick={handlePostSubmit}
                >
                  <button className="flex items-center justify-center text-white">
                    등록
                  </button>
                </div>
                <p
                  className={`absolute left-full ml-4 transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
                  style={{ zIndex: 10, color: 'black' }}
                >
                  + 20 point!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="posts-section mt-6">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="post mb-4 flex border-b border-gray-300 p-4"
            >
              <div className="post-image mr-4 h-24 w-24 flex-shrink-0 bg-green-100"></div>
              <div className="post-content">
                <div className="post-header flex justify-between">
                  <span className="post-region font-bold">{post.region}</span>
                  <span className="post-date text-gray-500">{post.date}</span>
                </div>
                <div className="post-text mt-2">{post.content}</div>
                <div className="post-footer mt-2 flex items-center justify-between">
                  <span className="post-views text-gray-600">
                    저도 봤어요: {post.views}
                  </span>
                  <div className="post-author flex items-center">
                    <img
                      src={post.author.avatar}
                      alt="Author"
                      className="mr-2 h-6 w-6 rounded-full"
                    />
                    <span className="text-gray-700">{post.author.name}</span>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Forum;
