/* eslint-disable no-undef */
import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function NewKakao() {
  const [search, setSearch] = useState('');
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [info, setInfo] = useState(null);

  const handleCreateMap = (map) => {
    setMap(map);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (!search) {
      return;
    }

    // eslint-disable-next-line no-undef
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch('이태원 맛집', (data, status, _pagination) => {
      if (status !== kakao.maps.services.Status.OK) {
        return;
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds();
      const markers = [];

      for (var i = 0; i < data.length; i++) {
        // @ts-ignore
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          content: data[i].place_name,
        });
        // @ts-ignore
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      setMarkers(markers);

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    });
  };

  const handleClickMarker = (marker) => () => {
    setInfo(marker);
  };

  return (
    <section className='flex items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <input
          className='border-[1px] border-solid border-red-300'
          value={search}
          onChange={handleChange}
        />
        <button
          className='border-[1px] border-solid border-red-300'
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
      <section className='w-[980px] h-[740px]'>
        <Map
          style={{ width: '100%', height: '100%' }}
          center={{
            // 지도의 중심좌표
            lat: 37.560159,
            lng: 126.975289,
          }}
          level={3}
          onCreate={handleCreateMap}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={handleClickMarker(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: '#000' }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
      </section>
    </section>
  );
}
