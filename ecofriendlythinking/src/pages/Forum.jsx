import React, { useState, useEffect } from 'react';
import './Forum.css';

const Forum = () => {
  const [selectedGu, setSelectedGu] = useState('강남구');
  const [points, setPoints] = useState({ register: 0, checkbox: 0 });
  const [hovered, setHovered] = useState({ register: false, checkbox: false });
  const [posts, setPosts] = useState([]);

  const guList = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];

  useEffect(() => {
    fetchPosts();
  }, [selectedGu]);

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

  return (
    <div className="forum p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* 지도 및 정보 박스 */}
        <div className="map-info w-full md:w-2/3 border border-gray-300 p-4 rounded mb-4 md:mb-0">
          {/* 여기에는 지도 또는 관련 정보가 들어갈 예정 */}
        </div>

        {/* 업로드 및 입력 섹션 */}
        <div className="upload-section flex flex-col items-start space-y-4 md:w-1/3">
          <input 
            type="file" 
            className="image-upload border-dashed border-2 border-gray-300 p-2 rounded w-full" 
            onChange={handleFileChange} 
          />
          <input 
            type="text" 
            className="text-input border border-gray-300 p-2 rounded w-full" 
            placeholder="무단 투기 신고 지역" 
          />
          <div className="flex items-center space-x-2">
            <button 
              className="register-button bg-green-700 text-white px-4 py-2 rounded hover:bg-[#508D4E]" 
              onMouseEnter={handleRegisterHover} 
              onMouseLeave={handleRegisterHover}
              onClick={handleSubmit}
            >
              등록
            </button>
            {hovered.register && <div className="point-notification text-green-700 font-semibold">+ {points.register} point!</div>}
          </div>
        </div>
      </div>

      <div className="region-selector mt-4">
        <select className="w-full md:w-auto border border-gray-300 p-2 rounded" value={selectedGu} onChange={(e) => setSelectedGu(e.target.value)}>
          {guList.map(gu => <option key={gu} value={gu}>{gu}</option>)}
        </select>
      </div>

      <div className="same-content-check flex items-center mt-4">
        <input type="checkbox" 
               className="mr-2"
               onMouseEnter={handleCheckboxHover} 
               onMouseLeave={handleCheckboxHover} />
        {hovered.checkbox && <div className="point-notification text-green-700 font-semibold">+ {points.checkbox} point!</div>}
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
  );
}

export default Forum;
