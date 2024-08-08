import React from 'react';
import image1 from '../images/image1.jpg';
import edit from '../images/edit.svg';

export const UserInfo = ({ name }) => {
  //user nickname 불러오는 api 요청
  console.log(name);
  return (
    <div className="flex h-[420px] w-[300px] flex-col items-center rounded-xl border-2 border-lightGreen bg-white drop-shadow">
      <img
        src={image1}
        alt="image 1"
        className="mt-[10px] h-[250px] w-[250px] rounded-full"
      />
      <div className="mt-[10px] flex flex-col items-center">
        <div className="flex items-center justify-center space-x-[30px]">
          <p className="text-[25px]">{name}</p>
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
  );
};
