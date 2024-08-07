import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'

import image1 from '../images/image1.jpg';
import edit from '../images/edit.svg';

// const userId = localStorage.getItem('userId');
// console.log(userId);


const MyPage =  () => {

    // const [userInfo, setUserInfo] = useState({
    //     email: '',
    //     name: ''
    // });

    // useEffect(() => {
    //     const userId = localStorage.getItem('userId');
    //     console.log(userId);
    //     if (userId) {
    //         axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
    //         .then(response => {
    //             const { email, nickname } = response.data;
    //             console.log("Received data:", response.data);
    //             setUserInfo({ email, name: nickname });
    //         })
    //         .catch(error => {
    //             console.error('Error fetching user info:', error);
    //         });
    //     } else {
    //         console.error('No user ID found');
    //     }
    // }, []);
    
    return (
        <div>
                <div className='w-[1400px] h-[1000px] mx-auto mt-[70px] justify-center'>
                  <div className='flex'>
                    <div className='w-[150px] h-[60px] text-[20px] flex justify-center items-center border-2 rounded-xl bg-[#D6EFD8] cursor-pointer hover:bg-[#365a31] hover:text-white'>내 정보</div> 
                    <div className='w-[150px] h-[60px] text-[20px] flex justify-center items-center border-2 rounded-xl cursor-pointer hover:bg-[#365a31] hover:text-white'>내 리뷰</div>  
                    <div className='w-[150px] h-[60px] text-[20px] flex justify-center items-center border-2 rounded-xl cursor-pointer hover:bg-[#365a31] hover:text-white'>내 포럼</div>   
                  </div>

                    <div className='flex justify-between'>
                        <div className='bg-gradient-to-b from-[#D6EFD8] to-white w-[1040px] h-[840px] rounded-xl'>
                            <div className='flex flex-col gap-[40px]'>
                                <div className='bg-white w-[970px] h-[225px] mt-[40px] ml-[30px]'>
                                    <div className='flex gap-[20px]'>
                                        <div className='w-[300px] h-[200px] mt-[40px] ml-[40px] text-[20px] space-y-[10px]'>
                                            <p>카카오로고</p>
                                            <p>이메일</p>
                                            <p>이름</p>
                                            <p>전화번호</p>
                                        </div>
                                        <div className='w-[300px] h-[200px] mt-[40px] text-[20px] space-y-[10px]'>
                                            <p>null</p>
                                            <p>elice@kakao.com</p>
                                            <p>엘리스</p>
                                            <p>010-0000-0000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white w-[970px] h-[400px] ml-[30px]'>
                                    <p className='text-[#365a31] font-bold text-[20px] mt-[40px] ml-[40px] mb-[40px]'>최근 포인트 내역</p>
                                    <div className='w-[900px] h-[255px] ml-[40px] flex'>
                                        <div className='w-[300px] flex flex-col gap-4'>
                                            <div className='font-bold border-b-2 border-[#365a31] pb-2'>활동</div>
                                            <div className='flex flex-col gap-2'>
                                                <p>리뷰</p>
                                                <p>응모</p>
                                                <p>포럼</p>
                                                <p>포럼</p>
                                                <p>포럼</p>
                                            </div>
                                        </div>

                                        <div className='w-[300px] flex flex-col gap-4'>
                                            <div className='font-bold border-b-2 border-[#365a31] pb-2'>상세 내용</div>
                                            <div className='flex flex-col gap-2'>
                                                <p>스타벅스 광화문점</p>
                                                <p>달콤 초콜릿 추첨 이벤트</p>
                                                <p>스타벅스 광화문점</p>
                                                <p>스타벅스 광화문점</p>
                                                <p>스타벅스 광화문점</p>
                                            </div>
                                        </div>

                                
                                        <div className='flex flex-col gap-4 w-[300px]'>
                                            <div className='font-bold border-b-2 border-[#365a31] pb-2'>날짜</div>
                                            <div className='flex flex-col gap-2'>
                                                <p>2024-07-26</p>
                                                <p>2024-07-27</p>
                                                <p>2024-07-28</p>
                                                <p>2024-07-29</p>
                                                <p>2024-07-30</p>
                                            </div>
                                        </div>

                                
                                        <div className='flex flex-col gap-4 w-[300px]'>
                                            <div className='font-bold border-b-2 border-[#365a31] pb-2'>포인트</div>
                                            <div className='flex flex-col gap-2'>
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
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex flex-col w-[300px] rounded-xl border-2 h-[420px] items-center'>
                                <img src={image1} alt="image 1" className='w-[250px] h-[250px] mt-[10px] rounded-[125px]'/>
                                <div className='flex flex-col items-center mt-[10px]'>
                                    <div className='flex items-center justify-center space-x-[30px]'>
                                        <p type='text' className='text-[25px]'>닉네임</p>
                                        <img src={edit} alt="edit image" className='w-[30px] h-[30px] cursor-pointer'/>
                                    </div>
                                    <div className='flex flex-col items-center mt-[20px]'>
                                        <div className='flex justify-between w-full px-[10px] gap-[50px]'>
                                            <p className='text-blue-500 font-bold'>나의 포인트</p>
                                            <p>500</p>
                                        </div>
                                        <div className='flex justify-between w-full px-[10px] mt-[5px]'>
                                            <p className='text-blue-500 font-bold'>응모건수</p>
                                            <p>10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-xl border-2 w-[300px] h-[400px] flex'>
                                <div className='mt-[40px] ml-[40px]'>
                                    <p className='text-[20px]'>당첨 결과 공지</p>
                                    <div className='mt-[40px] flex flex-col gap-[10px]'>
                                        <p className='text-gray-500 text-[20px]'>이런이벤트 당첨자 결과</p>
                                        <p className='text-gray-500 text-[20px]'>이런이벤트 당첨자 결과</p>
                                        <p className='text-gray-500 text-[20px]'>이런이벤트 당첨자 결과</p>
                                        <p className='text-gray-500 text-[20px]'>이런이벤트 당첨자 결과</p>
                                        <p className='text-gray-500 text-[20px]'>이런이벤트 당첨자 결과</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MyPage;