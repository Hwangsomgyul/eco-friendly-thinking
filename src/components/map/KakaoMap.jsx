/* eslint-disable no-undef */
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap({
  selectedMarker,
  markers,
  onSelectMarker,
  onCreateMap,
}) {
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
            onClick={(marker) => onSelectMarker(marker)}
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
