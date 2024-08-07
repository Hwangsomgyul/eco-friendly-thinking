import React, { useState, useEffect } from 'react';
import './Forum.css';
import axios from 'axios';

import boxOk from '../images/boxOk.svg';
import boxNotOk from '../images/boxNotOk.svg';

const Forum = () => {
  const [selectedGu, setSelectedGu] = useState('강남구');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [setTotalPages] = useState(1);
  const postsPerPage = 5; // 페이지당 게시글 수
  const access_token = 'your_access_token'; // 실제 액세스 토큰으로 대체

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    setClicked(prev => !prev);
  };

  const guList = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구',
                  '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구',
                  '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구',
                  '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
  
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
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=df5c8b8d6500a3ce6d4151f4e4900ceb';
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

              const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978);
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

  // 이미지 업로드
  const handleImageUpload = (event) => {
    // 파일 업로드
    console.log(event.target.files[0]);
  };

  // 게시글 등록 처리
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

  // 현재 페이지에 표시할 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 번호 변경 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <div className="mx-auto w-[1400px] h-[1780px] relative mt-[110px] gap-[25px]">
        <div className='flex w-full h-[430px] gap-[20px]'>
          <div id='map' className='w-[1000px] h-[430px] relative z-0'>
            <div className='flex gap-[10px] z-10 relative m-2'>
              <button className='p-2 rounded bg-[#365a31] h-[80px] w-[80px] text-white'>쓰레기통</button>
              <button className='p-2 rounded bg-[#365a31] h-[80px] w-[80px] text-white'>CCTV</button>
            </div>
          </div>

          <div>
          <div className='flex items-center gap-[10px]'>
  <p className="text-[22px] font-bold">무단 투기 신고 지역</p>
  <div className="region-selector flex-grow">
    <select className="w-[250px] border border-gray-300 p-2 rounded" value={selectedGu} onChange={(e) => setSelectedGu(e.target.value)}>
      {guList.map(gu => <option key={gu} value={gu}>{gu}</option>)}
    </select>
  </div>
</div>

            <div className='flex mt-[15px] justify-between'>
              <p>동일한 내용의 게시글이 이미 등록되어 있나요?</p>
              <div className='relative flex item-center'>
                <img src={clicked ? boxOk : boxNotOk} alt="box image" 
                  className="w-[30px] h-[30px] object-cover cursor-pointer"
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                  onClick={handleClick} />
                <p className={`absolute left-full ml-4 transition-opacity 
                  duration-300`}
                  style={{ zIndex: 10, color: 'black', opacity: hover ? 1 : 0 }}>
                  + 10 point!
                </p>
              </div>
            </div>
            <div className='mt-[15px] flex gap-[10px]'>
            <div className='bg-[#D6EFD8] w-[230px] h-[270px] flex justify-center items-center text-[20px] cursor-pointer' onClick={() => document.getElementById('fileUpload').click()}>
  image upload
  <input
    type="file"
    id="fileUpload"
    className="hidden"
    onChange={handleImageUpload}
  />
</div>

              <textarea
                className="w-full h-360px p-2 border border-gray-300 rounded"
                placeholder="구체적인 상황과 위치를 첨부한 사진에 대해 설명해 주세요."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className='flex justify-end'>
              <div className='relative flex items-center mt-2'>
                <div className='flex justify-center w-[80px] h-[40px] border-[#365a31] rounded border-2 bg-[#365a31] mt-[5px] cursor-pointer hover:bg-[#508D4E]' onClick={handlePostSubmit}>
                  <button className='flex justify-center items-center text-white'>등록</button>
                </div>
                <p className={`absolute left-full ml-4 transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
                  style={{ zIndex: 10, color: 'black' }}>
                  + 20 point!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="posts-section mt-6">
          {currentPosts.map((post) => (
            <div key={post.id} className="post mb-4 p-4 border-b border-gray-300 flex">
              <div className="post-image bg-green-100 w-24 h-24 flex-shrink-0 mr-4"></div>
              <div className="post-content">
                <div className="post-header flex justify-between">
                  <span className="post-region font-bold">{post.region}</span>
                  <span className="post-date text-gray-500">{post.date}</span>
                </div>
                <div className="post-text mt-2">{post.content}</div>
                <div className="post-footer flex justify-between items-center mt-2">
                  <span className="post-views text-gray-600">저도 봤어요: {post.views}</span>
                  <div className="post-author flex items-center">
                    <img src={post.author.avatar} alt="Author" className="w-6 h-6 rounded-full mr-2" />
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