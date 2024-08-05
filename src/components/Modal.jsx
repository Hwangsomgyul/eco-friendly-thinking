import React, { useState } from 'react';
import Star from './Star';
import { Link } from 'react-router-dom';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

const Modal = ({ place_name, road_address_name, onClose, onOpenReviewModal }) => {
  // const handleClose = (event) => {
  //     if(event.target === event.currentTarget) {
  //         onClose();
  //     }
  // };

  // if(!open) {
  //     return null;
  // }

  return (
    <div className="dimmed h-[640px]">
      <section className=" h-[640px] w-[350px] flex-col justify-center border-2">
        <div className="modal-header" modal-header>
          <div className="mt-[10px]">
            <div className="mr-[15px] flex justify-end">
              <button className="flex border-2 p-2" onClick={onClose}>
                X
              </button>
            </div>
            <div className="m-[15px] flex-col">
              <p className="mb-[10px] flex justify-center text-[20px] font-bold">
                {place_name}
              </p>
              <p className="flex justify-center">{road_address_name}</p>
              <div className="flex justify-center gap-[5px] text-[20px]">
                <Star totalStars={5} />
              </div>
              <div className="flex items-end justify-end">
                {/* <Link to="/ReviewPage" className="rounded-xl bg-[#D6EFD8] p-2 hover:text-white hover:bg-[#1A5319]">
                  리뷰하러 가기
                </Link> */}
              </div>
              <div className="mt-4 border-t border-[#365a31]"></div>
            </div>
          </div>
        </div>
        <div className="m-[15px] mt-[20px]" modal-body>
          <div className="flex flex-wrap justify-center gap-[10px]" modal-top>
            <img src={image1} alt="Image 1" className="h-[95px] w-[95px]" />
            <img src={image2} alt="Image 2" className="h-[95px] w-[95px]" />
            <img src={image3} alt="Image 3" className="h-[95px] w-[95px]" />
            <img src={image4} alt="Image 4" className="h-[95px] w-[95px]" />
            <img src={image5} alt="Image 5" className="h-[95px] w-[95px]" />
            <img src={image6} alt="Image 6" className="h-[95px] w-[95px]" />
          </div>
          <div className="mt-4 border-t border-[#D6EFD8]"></div>
          <div className="modal-middle">
            <div className="flex flex-wrap overflow-hidden text-ellipsis text-[13px]">
              <p className="mb-4 overflow-hidden text-ellipsis">
                너무너무 좋아요 짱 최고입니다. 30자 이상 글 후기 예시입니다.
                단어 단위 줄바꿈이 되면 좋겠습니다.
              </p>
              <p className="mb-4 overflow-hidden text-ellipsis">
                리뷰를 많이 보여주는 게 목적이니 유저 이름은 이 페이지에서는
                생략해도 되지 않을까요? 최신 리뷰니 차라리 날짜를 띄우는 건
                어떨지...
              </p>
            </div>
          </div>
          <div
            className="m-auto flex h-[30px] w-[80px] items-center justify-center rounded-xl bg-[#365a31] hover:font-bold hover:bg-[#80AF81]"
            modal-bottom
          >
            <button onClick={onOpenReviewModal} className="text-white transition">리뷰하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
