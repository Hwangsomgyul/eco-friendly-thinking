import React from 'react';
import Star from './Star';
import image2 from '../images/image2.jpg'

const PhotoReviewModal = () => {
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
                            <Star totalStars={5} />
                            </div>
                                   
                        </div>
                    </div>        
                </div>
                        
                    <div className='mt-[20px] m-[15px]' modal-body>     
                        <div className='border-t mb-[20px] border-[#D6EFD8]'></div>
                        <div className='modal-middle'>
                            <img src={image2} alt="Image 2" className="w-[190px] h-[190px] m-auto"/>
                        </div>
                        <div className='border-t mt-[20px] mb-[20px] border-[#D6EFD8]'></div>

                        <div className='flex justify-between mb-[10px]'>
                            <div className='text-[18px]'>★★★★★</div>
                            <div className='text-[18px]'>2024-08-02</div>    
                        </div>
                        <div className=''>
                            <p className='text-[15px]'>사진 리뷰를 클릭했을 때는 이렇게 사진이 크게, 아래에
                                글 리뷰를 띄웁니다. 줄글 리뷰는 기본이미지 띄워주는 건 어떨까요?
                            </p>
                            <div className='font-bold'>김민지먼지</div>
                        </div>     
                        <div className='flex justify-center items-center mt-[20px]'>
                            <button className='bg-[#365a31] text-white w-[70px] h-[35px] rounded-xl'>더보기</button>    
                        </div>                   
                    </div>
                      
            </section>
        </div>
    )
}

export default PhotoReviewModal;