import React, {useState, useEffect} from 'react';
import Modal from '../components/Modal';
import './Forum.css';

import boxOk from '../images/boxOk.svg';
import boxNotOk from '../images/boxNotOk.svg';



const Forum = () => {

  const [selectedGu, setSelectedGu] = useState('강남구');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState({ register: 0, checkbox: 0 });
  const [hovered, setHovered] = useState({ register: false, checkbox: false });
  const [posts, setPosts] = useState([]);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const handleClick = () => {
    setClicked(prev => !prev);
  }

  const guList = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
  
  const fetchPosts = async () => {
    const fetchedPosts = [
      {
        id: 1,
        gu: '강남구',
        date: '2024-07-27 20:00',
        content: '여기에 게시글 내용이 들어갑니다.',
        image: null,
        author: {
          name: '닉네임',
          /* avatar: '/path/to/profile.jpg' */
        },
        views: 8
      }
    ];
    setPosts(fetchedPosts);
  };

  const handleRegisterHover = () => {
    setHovered(prev => ({ ...prev, register: !prev.register }));
    setPoints(prev => ({ ...prev, register: prev.register ? 0 : 20 }));
  };

  const handleCheckboxHover = () => {
    setHovered(prev => ({ ...prev, checkbox: !prev.checkbox }));
    setPoints(prev => ({ ...prev, checkbox: prev.checkbox ? 0 : 10 }));
  };

  const handleFileChange = (event) => {};

  const handleSubmit = () => {};
  // const [DropdownView, setDropdownView] = useState(false);

    // <ul onClick={() => {setDropdownView(!DropdownView)}}>
    //     지역구{" "}
    //     {DropdownView ? '⌃' : '⌄'} 
    //     {DropdownView && <Forum />} 
    // </ul>

      // selectedGu가 변경될 때마다 데이터를 가져오는 useEffect
    useEffect(() => {
    const fetchPosts = async () => {
      // 실제 데이터 가져오기 로직
      console.log(`Fetching posts for ${selectedGu}`);
      // 예시로 빈 배열을 설정
      setPosts([]);
    };

    fetchPosts();
  }, [selectedGu]); // selectedGu가 변경될 때마다 실행

    
  // 컴포넌트가 처음 마운트될 때 Kakao 지도를 로드하는 useEffect
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
                level: 3,
              };
              const map = new window.kakao.maps.Map(mapContainer, options);

              const markerPosition = new window.kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
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
  }, []); // 빈 배열을 넣어주어 컴포넌트 마운트 시 한 번만 실행


    return (
        <div>
            <div className="mx-auto w-[1400px] h-[1780px] relative mt-[110px] gap-[25px]">
                <div className='flex w-full h-[430px] gap-[20px]'>
                    <div id='map' className='w-[600px] h-[430px] relative z-0'>
                        <div className='flex gap-[10px] z-10 relative m-2'>
                            <button className='p-2 rounded bg-[#365a31] h-[80px] w-[80px] text-white'>쓰레기통</button>
                            <button className='p-2 rounded bg-[#365a31] h-[80px] w-[80px] text-white'>CCTV</button>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-[10px] justify-between'>
                            <p className="text-[22px]">무단 투기 신고 지역</p>
                            <div className="region-selector mt-4">
        <select className="w-full md:w-auto border border-gray-300 p-2 rounded" value={selectedGu} onChange={(e) => setSelectedGu(e.target.value)}>
          {guList.map(gu => <option key={gu} value={gu}>{gu}</option>)}
        </select>
      </div>
                        </div>
                        <div className='flex mt-[20px] justify-between'>
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
                            <div className='bg-[#D6EFD8] w-[230px] h-[280px] flex justify-center items-center text-[20px]'>image upload</div>
                              <textarea
              className="w-full h-280px p-2 border border-gray-300 rounded mb-4"
              placeholder="구체적인 상황과 위치를 첨부한 사진에 대해 설명해 주세요."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
                        </div>
                        <div className='flex justify-end'>
                        <div className='relative flex items-center'>
  <div className='flex justify-center w-[80px] h-[40px] rounded border-2 bg-[#365a31] mt-[5px] cursor-pointer hover:bg-[#508D4E]'>
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

<div className="posts-section mt-8">
        {posts.map(post => (
          <div key={post.id} className="post flex border-b border-dashed border-gray-300 py-4">
            <div className="post-image w-24 h-24 bg-gray-100 flex items-center justify-center mr-4">{post.image ? <img src={post.image} alt="post" /> : '이미지'}</div>
            <div className="post-content flex-1">
              <div className="post-header flex justify-between">
                <span className="post-region font-bold">{post.gu}</span>
                <span className="post-date text-gray-500">{post.date}</span>
              </div>
              <div className="post-text mt-2">
                {post.content}
              </div>
              <div className="post-footer flex justify-between items-center mt-4">
                <span className="post-views text-gray-600">저도 봤어요({post.views})</span>
                <div className="post-author flex items-center">
                  <img src={post.author.avatar} alt="Profile" className="w-8 h-8 rounded-full mr-2"/>
                  <span className="author-name">{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
            </div>
        </div>
    )
};

export default Forum;