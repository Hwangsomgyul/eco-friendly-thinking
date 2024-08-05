import React, { useEffect } from 'react';
import './KakaoMap.css'

const KakaoMap = () => {

  useEffect(() => {
    const loadKakaoMapScript = () => {
      const script = document.createElement('script');
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=df5c8b8d6500a3ce6d4151f4e4900ceb&libraries=services';
      script.async = true;

      script.onload = () => {
        // Check if kakao object is available
        if (window.kakao && window.kakao.maps) {
          console.log('Kakao Maps API loaded');
          initMap(window.kakao);
        } else {
          console.error('Kakao Maps object is not available');
        }
      };

      script.onerror = (error) => {
        console.error('Error loading Kakao Maps script:', error);
      };

      document.body.appendChild(script);
    };

    const initMap = (kakao) => {
      const mapContainer = document.getElementById('map');
      const menuWrap = document.getElementById('menu_wrap');

      if (!mapContainer || !menuWrap) {
        console.error('Map container or menu wrap element not found');
        return;
      }

      const mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);
      const ps = new kakao.maps.services.Places();
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      let markers = [];

      const searchPlaces = () => {
        const keyword = document.getElementById('keyword').value.trim();
        
        if (!keyword) {
          alert('키워드를 입력해주세요!');
          return false;
        }
        ps.keywordSearch(keyword, placesSearchCB);
      };

      const placesSearchCB = (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          displayPlaces(data);
          displayPagination(pagination);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
        }
      };

      const displayPlaces = (places) => {
        const listEl = document.getElementById('placesList');
        const menuEl = document.getElementById('menu_wrap');
        const fragment = document.createDocumentFragment();
        const bounds = new kakao.maps.LatLngBounds();
        removeAllChildNods(listEl);
        removeMarker();

        for (let i = 0; i < places.length; i++) {
          const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
          const marker = addMarker(placePosition, i);
          const itemEl = getListItem(i, places[i]);
          bounds.extend(placePosition);

          // Fixing the function scope and parentheses
          (function(marker, title) {
            kakao.maps.event.addListener(marker, 'mouseover', function() {
              displayInfowindow(marker, title);
            });
            kakao.maps.event.addListener(marker, 'mouseout', function() {
              infowindow.close();
            });
            itemEl.onmouseover = function() {
              displayInfowindow(marker, title);
            };
            itemEl.onmouseout = function() {
              infowindow.close();
            };
          })(marker, places[i].place_name);

          fragment.appendChild(itemEl);
        }
        listEl.appendChild(fragment);
        listEl.className = 'text-green-600'; // Tailwind 클래스로 색상 적용
        menuEl.className = 'bg-green-100'; // Tailwind 클래스로 배경색 적용
        menuEl.scrollTop = 0;
        map.setBounds(bounds);
      };

      const getListItem = (index, places) => {
        const el = document.createElement('li');
        let itemStr = `<span class="markerbg marker_${index + 1}"></span>
                       <div class="info">
                         <h5>${places.place_name}</h5>`;
        if (places.road_address_name) {
          itemStr += `<span>${places.road_address_name}</span>
                      <span class="jibun gray">${places.address_name}</span>`;
        } else {
          itemStr += `<span>${places.address_name}</span>`;
        }
        itemStr += `<span class="tel">${places.phone}</span>
                   </div>`;
        el.innerHTML = itemStr;
        el.className = 'item';
        return el;
      };

      const addMarker = (position, idx) => {
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
        const imageSize = new kakao.maps.Size(36, 37);
        const imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691),
          spriteOrigin: new kakao.maps.Point(0, (idx * 46) + 10),
          offset: new kakao.maps.Point(13, 37)
        };
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
        const marker = new kakao.maps.Marker({
          position,
          image: markerImage
        });
        marker.setMap(map);
        markers.push(marker);
        return marker;
      };

      const removeMarker = () => {
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      };

      const displayPagination = (pagination) => {
        const paginationEl = document.getElementById('pagination');
        const fragment = document.createDocumentFragment();
        while (paginationEl.hasChildNodes()) {
          paginationEl.removeChild(paginationEl.lastChild);
        }
        for (let i = 1; i <= pagination.last; i++) {
          const el = document.createElement('a');
          el.href = '#';
          el.innerHTML = i;
          if (i === pagination.current) {
            el.className = 'on';
          } else {
            el.onclick = ((i) => () => {
              pagination.gotoPage(i);
            })(i);
          }
          fragment.appendChild(el);
        }
        paginationEl.appendChild(fragment);
      };

      const displayInfowindow = (marker, title) => {
        const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
        infowindow.setContent(content);
        infowindow.open(map, marker);
      };

      const removeAllChildNods = (el) => {
        while (el.hasChildNodes()) {
          el.removeChild(el.lastChild);
        }
      };

      const addClickMarker = (latlng) => {
        const marker = new kakao.maps.Marker({
          position: latlng
        });
        marker.setMap(map);
        markers.push(marker);
        const content = `<div class="info-box">
                         <h4>선택한 위치</h4>
                         <p>좌표: ${latlng.getLat()}, ${latlng.getLng()}</p>
                       </div>`;
        infowindow.setContent(content);
        infowindow.open(map, marker);
      };

      kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
        const latlng = mouseEvent.latLng;
        removeMarker();
        infowindow.close();
        addClickMarker(latlng);
      });

      document.getElementById('search-btn').addEventListener('click', searchPlaces);
    };

    loadKakaoMapScript();

    return () => {
      // Cleanup script
      const script = document.querySelector('script[src*="https://dapi.kakao.com/v2/maps/sdk.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
        <div className="flex justify-center relative w-[1300px] h-[640px]" map_wrap>
                <div id="map"></div>
            
                <div id="menu_wrap" class="bg_white">
                    <div class="option">
                        <div id="search-input">
                            <form onsubmit="searchPlaces(); return false;">
                                <input className="w-[220px] h-[45px] border-2 rounded-xl" type="text" value="서울시" id="keyword" size="15" /> 
                                <button className='w-[50px] h-[45px] rounded-xl bg-[#D6EFD8] font-white' class="txt-btn" type="submit">검색하기</button>
                                <p class="arrow_box">리뷰쓰고 20point!!</p>
                            </form>
                        </div>
                    </div>
                   
                    <ul id="placesList"></ul>
                    <div id="pagination"></div>
                </div>
            </div>
  )
};

export default KakaoMap;
