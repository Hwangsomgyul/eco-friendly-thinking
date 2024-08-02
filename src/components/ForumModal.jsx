import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import image3 from '../images/image3.jpg';
import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';


const ForumModal = () => {
    const [count, setCount] = useState(0);
    const [hasClicked, setHasClicked] = useState(false);
    const [vote, setVote] = useState(false);

    const handleClick = () => {
        if (!hasClicked) {
            setCount(count + 1);
            setHasClicked(true);
        }
    }

    const voteClick = () => {
        if(!vote) {
            setVote(true);
            <p>추천하였습니다!!</p>
        }
    }

    return (
        <div className='flex translate-X-50%'dimmed>
            <section className='flex-col h-[640px] w-[696px] border-2 justify-center '>
                <div className='modal-header'>
                    <div className="mt-[20px]">
                        <div className="flex justify-between items-center mr-[15px] ml-[15px]">
                            <p className='text-white bg-[#365a31] w-[64px] h-[30px] rounded-xl flex items-center justify-center'>종로구</p>
                            <button className="flex p-2 border-2">X</button>
                        </div>
                        <div className="flex-col mt-[20px] mr-[15px] ml-[15px]">
                            <p className="text-[20px] font-bold mb-[10px]">스타벅스 럭키비키점 뒤 무단투기 심각합니다..</p>
                            <div className='flex justify-end gap-[20px]'>
                                <p className="flex justify-center">2024-08-02</p>
                                <p className='font-bold'>김민지먼지</p>
                            </div>
                            <div className='border-t border-[#365a31] mt-2'></div>
                            <div className="gap-[20px] mt-[20px] flex m-auto text-[20px] w-[620px] h-[270px] ">
                                <div className='m-full flex justify-center items-center gap-[10px]'>
                                    <img src={leftArrow} alt="left arr" className='w-[20px] h-[20px] cursor-pointer' />
                                    <img src={image3} alt="image3" className='w-[270px] h-[270px] object-cover' />
                                    <img src={rightArrow} alt="right arr" className='w-[20px] h-[20px] cursor-pointer' />
                                </div>
                                <div className='w-[300px] h-[270px]'>
                                    <p className='text-[13px]'>
                                        포럼 리뷰 글 예시 입니다. 근처에 cctv가 없어서 그런지 문제가 심각합니다.
                                        민원 넣을 수 있게 모두 공감 한번씩 부탁드립니다!<br /><br />
                                        포럼 리뷰 글 예시입니다. 근처에 cctv가 없어서 그런지 문제가 심각합니다. 민원 넣을 수 있게 모두
                                        공감 한번씩 부탁드립니다!<br /><br /> 포럼 리뷰 글 예시입니다. 근처에 cctv가 없어서 그런지 문제가 심각합니다.
                                        민원 넣을 수 있게 모두 공감 한번씩 부탁드립니다!
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={handleClick}
                                    disabled={hasClicked} // 버튼 비활성화
                                    className={`flex mt-[70px] w-[180px] h-[26px] rounded-xl border-2 bg-[#D6EFD8] ${hasClicked ? 'cursor-not-allowed opacity-50' : ''}`}
                                >
                                    <div className='bg-white w-[130px] h-full m-auto '>저도 봤어요!</div>
                                    {count} 회

                                    
                                </button>
                               
                                

                            </div>
                            <div className='flex justify-center items-center mt-[50px]'>
                                <Link to="/Pagination" className='flex justify-center items-center bg-[#365a31] w-[130px] h-[26px] rounded-xl text-white hover:bg-[#508D4E]'>다른 글 더보기</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForumModal;
