import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

import image1 from '../images/image1.jpg';
import edit from '../images/edit.svg';

// const userId = localStorage.getItem('userId');
// console.log(userId);

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    if (userId) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
        .then((response) => {
          const { email, nickname } = response.data;
          console.log('Received data:', response.data);
          setUserInfo({ email, name: nickname });
        })
        .catch((error) => {
          console.error('Error fetching user info:', error);
        });
    } else {
      console.error('No user ID found');
    }
  }, []);

  return (
    <div>
      <div className="mx-auto mt-[70px] h-[1000px] w-[1400px] justify-center">
        <div className="flex">
          <div className="flex h-[60px] w-[150px] cursor-pointer items-center justify-center rounded-xl border-2 bg-[#D6EFD8] text-[20px] hover:bg-[#365a31] hover:text-white">
            내 정보
          </div>
          <div className="flex h-[60px] w-[150px] cursor-pointer items-center justify-center rounded-xl border-2 text-[20px] hover:bg-[#365a31] hover:text-white">
            내 리뷰
          </div>
          <div className="flex h-[60px] w-[150px] cursor-pointer items-center justify-center rounded-xl border-2 text-[20px] hover:bg-[#365a31] hover:text-white">
            내 포럼
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-[840px] w-[1040px] rounded-xl bg-gradient-to-b from-[#D6EFD8] to-white">
            <div className="flex flex-col gap-[40px]">
              <div className="ml-[30px] mt-[40px] h-[225px] w-[970px] bg-white">
                <div className="flex gap-[20px]">
                  <div className="ml-[40px] mt-[40px] h-[200px] w-[300px] space-y-[10px] text-[20px]">
                    <p>카카오로고</p>
                    <p>이메일</p>
                    <p>이름</p>
                    <p>전화번호</p>
                  </div>
                  <div className="mt-[40px] h-[200px] w-[300px] space-y-[10px] text-[20px]">
                    <p>null</p>
                    <p>elice@kakao.com</p>
                    <p>엘리스</p>
                    <p>010-0000-0000</p>
                  </div>
                </div>
              </div>
              <div className="ml-[30px] h-[400px] w-[970px] bg-white">
                <p className="mb-[40px] ml-[40px] mt-[40px] text-[20px] font-bold text-[#365a31]">
                  최근 포인트 내역
                </p>
                <div className="ml-[40px] flex h-[255px] w-[900px]">
                  <div className="flex w-[300px] flex-col gap-4">
                    <div className="border-b-2 border-[#365a31] pb-2 font-bold">
                      활동
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>리뷰</p>
                      <p>응모</p>
                      <p>포럼</p>
                      <p>포럼</p>
                      <p>포럼</p>
                    </div>
                  </div>

                  <div className="flex w-[300px] flex-col gap-4">
                    <div className="border-b-2 border-[#365a31] pb-2 font-bold">
                      상세 내용
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>스타벅스 광화문점</p>
                      <p>달콤 초콜릿 추첨 이벤트</p>
                      <p>스타벅스 광화문점</p>
                      <p>스타벅스 광화문점</p>
                      <p>스타벅스 광화문점</p>
                    </div>
                  </div>

                  <div className="flex w-[300px] flex-col gap-4">
                    <div className="border-b-2 border-[#365a31] pb-2 font-bold">
                      날짜
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>2024-07-26</p>
                      <p>2024-07-27</p>
                      <p>2024-07-28</p>
                      <p>2024-07-29</p>
                      <p>2024-07-30</p>
                    </div>
                  </div>

                  <div className="flex w-[300px] flex-col gap-4">
                    <div className="border-b-2 border-[#365a31] pb-2 font-bold">
                      포인트
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>+ 30</p>
                      <p>+ 500</p>
                      <p>+ 10</p>
                      <p>+ 20</p>
                      <p>+ 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex h-[420px] w-[300px] flex-col items-center rounded-xl border-2">
              <img
                src={image1}
                alt="image 1"
                className="mt-[10px] h-[250px] w-[250px] rounded-[125px]"
              />
              <div className="mt-[10px] flex flex-col items-center">
                <div className="flex items-center justify-center space-x-[30px]">
                  <p type="text" className="text-[25px]">
                    닉네임
                  </p>
                  <img
                    src={edit}
                    alt="edit image"
                    className="h-[30px] w-[30px] cursor-pointer"
                  />
                </div>
                <div className="mt-[20px] flex flex-col items-center">
                  <div className="flex w-full justify-between gap-[50px] px-[10px]">
                    <p className="font-bold text-blue-500">나의 포인트</p>
                    <p>500</p>
                  </div>
                  <div className="mt-[5px] flex w-full justify-between px-[10px]">
                    <p className="font-bold text-blue-500">응모건수</p>
                    <p>10</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[400px] w-[300px] rounded-xl border-2">
              <div className="ml-[40px] mt-[40px]">
                <p className="text-[20px]">당첨 결과 공지</p>
                <div className="mt-[40px] flex flex-col gap-[10px]">
                  <p className="text-[20px] text-gray-500">
                    이런이벤트 당첨자 결과
                  </p>
                  <p className="text-[20px] text-gray-500">
                    이런이벤트 당첨자 결과
                  </p>
                  <p className="text-[20px] text-gray-500">
                    이런이벤트 당첨자 결과
                  </p>
                  <p className="text-[20px] text-gray-500">
                    이런이벤트 당첨자 결과
                  </p>
                  <p className="text-[20px] text-gray-500">
                    이런이벤트 당첨자 결과
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
