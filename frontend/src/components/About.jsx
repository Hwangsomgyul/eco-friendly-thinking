import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
     <br></br><br></br>
     <p>
     <span className="highlight">eco-friendly-thinking</span>은 분리수거 및 다회용기 사용을 촉진하기 위한 캠페인을 진행하고 있습니다.<br /><br></br>
     서울시에 위치한 비건 식당과 다회용기 사용을 실천하는 카페 등을 대상으로 하여,<br></br>많은 사용자들이 이러한 업체를 적극적으로 이용하도록 유도하고자 하는 서비스입니다.
     </p><br></br>
      <p>
        지난 몇 년간 서울시의 폐기물 증가 및 환경에 미치는 데이터를 제시하여,<br></br>코로나 이후 급증한 일회용기 사용의 남용을 막고 이를 줄이기 위한 해결책을 제시합니다.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="about-section">
        <h2>홈</h2>
        <p>
          메인페이지에서는 비건 식당 및 다회용기 사용 카페 등 서울시에 위치한 업체들을 검색할 수 있습니다.
        </p>
      </div>
      <div className="about-section">
        <h2>소개</h2>
        <p>
          이 사이트는 다회용기 사용을 장려하고, 유저들에게 관련 데이터를 제공하기 위해 만들어졌습니다.
        </p>
      </div>
      <div className="about-section">
        <h2>리뷰</h2>
        <p>
          해당 업체에 대한 리뷰를 통해 친환경적인 업체를 판단하고, 추천 리뷰를 통해 다른 유저들에게 알릴 수 있습니다.
        </p>
      </div>
      <div className="about-section">
        <h2>포럼</h2>
        <p>
          서울시에 위치한 쓰레기통 및 CCTV 위치 등의 데이터를 자치구별로 확인할 수 있습니다.
        </p>
      </div>
      <div className="about-section">
        <h2>상점</h2>
        <p>
          리뷰 작성 및 사진 업로드 등 캠페인에 참여하는 유저들을 대상으로 이벤트를 통해 동기 부여를 제공합니다.
        </p>
      </div>
      <div className="about-section">
        <h2>마이페이지</h2>
        <p>
          유저 개인의 정보, 활동 내역 및 포인트 등을 확인할 수 있는 페이지입니다.
        </p>
      </div>
    </div>
  );
};

export default About;
