import React from 'react';
import Header from './Header'
import Footer from './Footer';

const About = () => {

    return (
        <div>
            <Header />
                <div className='m-auto w-[1400px] h-[500px] mt-[100px]'>
                    <div className='text-[30px] text-bold mb-[80px]'>소개글</div>
                    <div className='text-[18px]'>이 사이트의 서비스는 분리수거 및 다회용기 사용을 동참하도록
                    유도하는 캠폐인으로 서울시에 위치한 많은 비건, 카페 등 다회용기 사용을
                    적극적으로 하고있는 업체를 대상으로 많은 유저들이 사용을 적극 권장하도록
                    하기 위한 서비스입니다
                    서울시에 따른 지난 몇년간의 폐기물 등 환경에 미치는 영향 및 그에 준하는 
                    데이터를 제시함으로 코로나를 기준으로 폭발적으로 증가한 1회용기 등 무분별한
                    사용의 남용을 막고자 이를 해결 및 줄여나가기 위해 서비스를 제시하고자 함
                    <br/>
                    <br/>
                        <div className='font-bold text-[20px]'>
                        홈: 메인페이지 비건 식당 및 다회용기 사용 카페 등 서울시에 준하는 업체들을 검색할 수 있습니다
                        <br/>
                        소개: 이 사이트를 만든 목적 또는 유저들에게 데이터를 제공하여 다회용기 사용에 동참하도록 소개하는 글
                        <br/>
                        리뷰: 해당 업체의 리뷰를 통하여 친환경적인 업체 유무를 판단하여 리뷰를 써서 추천을 통하여 유저들에게 알릴 수 있습니다
                        <br/>
                        포럼: 서울시에 위치한 쓰레기통 및 cctv 위치 등을 각 데이터를 구별로 확인 가능함
                        <br/>
                        상점: 각종 리뷰 및 사진 해당 사이트 내에서 캠폐인에 참여 등을 통하여 이벤트 추첨을 통하여 동기부여를 하고자 함
                        <br/>
                        마이페이지: 유저 개인의 정보 및 활동 및 포인트 등을 확인할 수 있는 페이지입니다
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )

}

export default About;