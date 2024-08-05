/* eslint-disable no-undef */
import { useState } from 'react';
import SearchField from '../components/map/search/SearchField';
import KakaoMap from '../components/map/KakaoMap';
import AddressList from '../components/map/search/AddressList';

export default function NewKakao() {
  const [search, setSearch] = useState('');
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [addresses, setAddresses] = useState([]);

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
      setAddresses(data);

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    });
  };

  return (
    <section className="flex justify-center gap-8">
      <div className="relative">
        <SearchField
          search={search}
          onChange={handleChange}
          onSearch={handleSearch}
        />
        <AddressList list={addresses} />
      </div>
      <KakaoMap markers={markers} onCreateMap={handleCreateMap} />
    </section>
  );
}
