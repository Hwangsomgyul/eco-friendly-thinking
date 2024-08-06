import React, { useState } from 'react';
import Star from './Star';

const ReviewModal = () => {

    const [text, setText] = useState('');

    const handleChange= (e) => {
        setText(e.target.value);
    }


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
                            <div  className="flex justify-center items-center">
                                <button className="flex justify-center items-center text-[#365a31]">내 리뷰 작성하기</button>
                            </div>         
                        </div>
                    </div>        
                </div>
                        
                    <div className='mt-[20px]  m-[15px]' modal-body>     
                        <div className='border-t border-[#D6EFD8] mt-4'></div>
                        <div className='modal-middle mt-10'>
                            <textarea value={text} onChange={handleChange}
                            placeholder="장바구니, 텀블러, 다회용기 등 
                            여러분의 경험을 공유해주세요.(30자 이상)"
                            className='w-[300px] h-[130px] border-4 rounded mx-auto'>
                            </textarea>
                        </div>
                        <div className='mt-[10px]'>
                            <input type="file" className='border-2 rounded bg-white' placeholder='이미지를 올려주세요'/>
                        </div>

                        <p className='mt-[40px] font-bold text-[#365a31]'>리뷰는 15일 이내에 삭제할 수 있습니다. </p>
                        <div className="w-[80px] h-[30px] bg-[#365a31] m-auto mt-[20px] flex justify-center items-center rounded-xl"modal-bottom>
                            <button className='text-white '>리뷰 등록</button>
                        </div>
                            
                        </div>
                      
            </section>
        </div>
    )
}

export default ReviewModal;