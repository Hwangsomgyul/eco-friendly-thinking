import React, { useState, useEffect } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const KakaoSearch = () => {
  const isLoaded = useKakaoLoader({
    appkey: 'df5c8b8d6500a3ce6d4151f4e4900ceb',
    libraries: ['services'],
  });

  const [position, setPosition] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [searchResultsList, setSearchResultsList] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;
    const { kakao } = window;
    if (!kakao) return;

    const handleSearch = () => {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          setSearchResultsList(data);
          displayPagination(pagination); // 페이지네이션 표시 호출
        } else {
          setSearchResultsList([]);
        }
      });
    };

    const handleInputChange = (e) => {
      const newKeyword = e.target.value;
      setKeyword(newKeyword);
      if (newKeyword.length > 1) {
        handleSearch();
      } else {
        setSearchResultsList([]);
      }
    };

    const handleResultClick = (position) => {
      setPosition(position);
      if (map) {
        map.setCenter(position);
      }
    };

    const displayPagination = (pagination) => {
      const paginationEl = document.getElementById('pagination');
      const fragment = document.createDocumentFragment();
      let i; // 'let'으로 변경

      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        const el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function(i) {
            return function() {
              pagination.gotoPage(i);
            }
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    };

    window.handleSearch = handleSearch;
    window.handleInputChange = handleInputChange;
    window.handleResultClick = handleResultClick;
  }, [isLoaded, keyword, map]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleMapClick = (map, mouseEvent) => {
    const latLng = mouseEvent.latLng;
    if (!latLng) {
      console.error('Cannot get latLng from mouseEvent');
      return;
    }
    const newPosition = {
      lat: latLng.getLat(),
      lng: latLng.getLng(),
    };
    setPosition(newPosition);
  };

  return (
    <div className='flex' style={{ display: 'flex', gap: '30px' }}>
      <div style={{
          width: '300px',
          height: '640px',
          padding: '10px',
          border: '2px solid black',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
      }}>
        <div>
          <input 
            type="text" 
            value={keyword} 
            onChange={(e) => window.handleInputChange(e)} 
            placeholder="장소를 입력하세요" 
            style={{ width: '100%', height: '40px', padding: '5px' }}
          />
          <button 
            onClick={() => window.handleSearch()} 
            style={{ width: '100%', height: '40px', marginTop: '5px', padding: '5px' }}
          >
            검색
          </button>
          
        </div>
          <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
            <ul id="placesList"></ul>
            <div id="pagination"></div>
          </div>

        <div style={{
          width: '100%',
          height: 'calc(100% - 85px)',
          overflowY: 'auto',
          marginTop: '10px',
          borderTop: '1px solid #ccc',
          backgroundColor: '#fff'
        }}>
          {searchResultsList.map((item) => (
            <div 
              key={item.id} 
              onClick={() => window.handleResultClick({ lat: item.y, lng: item.x })}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd',
              }}
            >
              {item.place_name}
            </div>
          ))}
        </div>
      </div>
      <div style={{
        width: '980px',
        height: '640px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Map
          id="map"
          center={{
            lat: 33.450701,
            lng: 126.570667,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          level={3}
          onClick={handleMapClick}
          onLoad={setMap}
        >
          {position && <MapMarker position={position} />}
        </Map>
      </div>
      <div>
        <p>
          <em>지도를 클릭해주세요!</em>
        </p>
        <div id="clickLatlng">
          {position &&
            `클릭한 위치의 위도는 ${position.lat} 이고, 경도는 ${position.lng} 입니다`}
        </div>
      </div>
    </div>
  );
};

export default KakaoSearch;
