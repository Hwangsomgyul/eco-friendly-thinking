/* eslint-disable no-undef */
import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap({ markers, onCreateMap }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  // TODO: 일단 냅둔다. 선택하면 모달 띄울 때 쓸지도 모름
  const [marker, setMarker] = useState(null);

  const handleClickMarker = (marker) => () => {
    setSelectedMarker(marker);
  };

  return (
    <section className="h-[740px] w-[980px]">
      <Map
        style={{ width: '100%', height: '100%' }}
        center={{
          // 지도의 중심좌표
          lat: 37.560159,
          lng: 126.975289,
        }}
        level={3}
        onCreate={onCreateMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={handleClickMarker(marker)}
          >
            {selectedMarker?.content === marker.content && (
              <div style={{ color: '#000' }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    </section>
  );
}
