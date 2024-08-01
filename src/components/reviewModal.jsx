import React from 'react';

const reviewModal = () => {
    return (
        <div className='dimmed'>
            <section className='flex-col h-[640px] w-[350px] border-2 justify-center'>
                <div className='modal-header' modal-header>
                    <div className="mt-[10px]">
                        <div className="flex justify-end mr-[15px]">
                            <button className="flex p-2 border-2" >X</button>
                        </div>
                        <div className="flex-col m-[15px]">
                            <p className="text-[20px] font-bold mb-[10px] flex justify-center">스타벅스 럭키비키점</p>
                            <p className="flex justify-center">서울 중구 퇴계로 100</p>
                            <div className="gap-[5px] flex justify-center text-[20px]">
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                            </div>
                            <div  className="flex justify-end items-end">
                                <button className="rounded-xl p-2 bg-[#D6EFD8]">리뷰추가</button>
                            </div>
                                <div className="border-t border-[#365a31] mt-4"></div>
                        </div>
                    </div>
                          
                    </div>
                        <div className='mt-[20px]  m-[15px]' modal-body>
                            <div className="flex justify-center flex-wrap gap-[10px]" modal-top>
                                <img src={image1} alt="Image 1" className="w-[95px] h-[95px]"/>
                                <img src={image2} alt="Image 2" className="w-[95px] h-[95px]"/>
                                <img src={image3} alt="Image 3" className="w-[95px] h-[95px]"/>
                                <img src={image4} alt="Image 4" className="w-[95px] h-[95px]"/>
                                <img src={image5} alt="Image 5" className="w-[95px] h-[95px]"/>
                                <img src={image6} alt="Image 6" className="w-[95px] h-[95px]"/>
                            </div>
                        <div className='border-t border-[#D6EFD8] mt-4'></div>
                        <div className='modal-middle'>
                            <div className='flex flex-wrap text-[13px] overflow-hidden text-ellipsis'>
                                <p className='mb-4 overflow-hidden text-ellipsis'>너무너무 좋아요 짱 최고입니다. 30자 이상 글 후기 예시입니다. 단어 단위 줄바꿈이 되면 좋겠습니다.</p>
                                <p className='mb-4 overflow-hidden text-ellipsis'>리뷰를 많이 보여주는 게 목적이니 유저 이름은 이 페이지에서는 생략해도 되지 않을까요? 최신 리뷰니 차라리
                                날짜를 띄우는 건 어떨지...</p>
                                      
                            </div>
                        </div>
                        <div className="w-[80px] h-[30px] bg-[#365a31] m-auto flex justify-center items-center rounded-xl"modal-bottom>
                            <button className='text-white '>더보기</button>
                        </div>
                            
                        </div>
                      
            </section>
        </div>
    )
}

export default reviewModal;