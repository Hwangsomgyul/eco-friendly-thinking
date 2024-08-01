import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import boxOk from '../images/boxOk.svg';
import boxNotOk from '../images/boxNotOk.svg';



const Forum = () => {

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

    // const [DropdownView, setDropdownView] = useState(false);

    // <ul onClick={() => {setDropdownView(!DropdownView)}}>
    //     지역구{" "}
    //     {DropdownView ? '⌃' : '⌄'} 
    //     {DropdownView && <Forum />} 
    // </ul>

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
                    level: 3 
                  };
                  const map = new window.kakao.maps.Map(mapContainer, options);
      
                  const markerPosition = new window.kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
                  const marker = new window.kakao.maps.Marker({
                    position: markerPosition
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
      }, []);

    return (
        <div>
            <Header />
            <div className="mx-auto w-[1400px] h-[1780px] relative border-2 mt-[110px] gap-[25px]">
                <div className='flex w-full h-[430px] border-2 gap-[20px]'>
                    <div id='map' className='w-[790px] h-[430px] relative z-0'>
                        <div className='flex gap-[25px] z-10 relative m-2'>
                            <button className='p-2 rounded bg-[#365a31] text-white'>쓰레기통</button>
                            <button className='p-2 rounded bg-[#365a31] text-white'>CCTV</button>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-[20px] justify-between'>
                            <p className="text-[25px]">무단 투기 신고 지역</p>
                            <button className='w-[225px] text-[20px] border-2'>지역구</button>
                        </div>
                        <div className='flex mt-[20px] justify-between'>
                            <p>동일한 내용의 게시글이 이미 존재하나요?</p>
                              <div className='relative flex item-center'>
                                <img src={clicked ? boxOk : boxNotOk} alt="box image" 
                                className="w-[30px] h-[30px] object-cover cursor-pointer"
                                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                onClick={handleClick} />
                              <p className={`absolute left-full ml-4 transition-opacity 
                                duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
                                style={{ zIndex: 10 }}>
                                + 10 point!
                              </p>
                            </div>
                            
                        </div>
                        <div className='mt-[15px] flex gap-[10px]'>
                            <div className='bg-[#D6EFD8] w-[230px] h-[280px] flex justify-center items-center text-[20px]'>image upload</div>
                            <div className='rounded-md border-2 w-[230px] text-[#365a31] text-[15px] p-6'>
                            구체적인 상황과 위치를<br /> 
                            첨부한 사진에 대해 설명<br/>해 주세요.<br/><br/>
                            주변에 CCTV나 쓰레기통이 있는지 지도로 확인해<br/>
                            보세요.</div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='flex justify-center w-[80px] h-[40px] rounded border-2 bg-[#365a31] mt-[5px] cursor-pointer hover:bg-[#508D4E]'>
                                <button className='flex justify-center items-center text-white'>등록</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>모달창</div>
            </div>
            <Footer />
        </div>
    )
};

export default Forum;