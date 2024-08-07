/* eslint-disable no-undef */
import { useState } from 'react';
import SearchField from '../components/map/search/SearchField';
import KakaoMap from '../components/map/KakaoMap';
import AddressList from '../components/map/search/AddressList';
import Modal from '../components/Modal';

export default function NewKakao() {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState('');
  const [map, setMap] = useState(null);
  const [addresses, setAddresses] = useState([]);

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

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

    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status !== kakao.maps.services.Status.OK) {
        return;
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds();
      const markers = [];

      for (let i = 0; i < data.length; i++) {
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

  const handleClickAddress = (marker) => {
    handleSelectMarker(marker);
    handleOpenModal();
  };

  const handleSelectMarker = (marker) => {
    console.log(marker);
    setSelectedMarker(marker);
  };

  return (
    <section className="flex justify-center gap-8">
      <div className="relative">
        <SearchField
          search={search}
          onChange={handleChange}
          onSearch={handleSearch}
        />
        <AddressList list={addresses} onClickAddress={handleClickAddress} />
      </div>
      <KakaoMap
        selectedMarker={selectedMarker}
        markers={markers}
        onSelectMarker={handleSelectMarker}
        onCreateMap={handleCreateMap}
      />
      {open && (
        <Modal
          place_name={selectedMarker.place_name}
          road_address_name={selectedMarker.road_address_name}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
