import React from "react";
import image1 from "../images/image1.jpg";
import edit from "../images/edit.svg";

export const UserInfo = () => {
  //user nickname 불러오는 api 요청

  return (
    <div className="flex flex-col w-[300px] rounded-xl border-2 border-lightGreen h-[420px] items-center drop-shadow bg-white">
      <img
        src={image1}
        alt="image 1"
        className="w-[250px] h-[250px] mt-[10px] rounded-full"
      />
      <div className="flex flex-col items-center mt-[10px]">
        <div className="flex items-center justify-center space-x-[30px]">
          <p className="text-[25px]">닉네임</p>
          <img
            src={edit}
            alt="edit image"
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center mt-[20px]">
          <div className="flex justify-between w-full px-[10px] gap-[50px]">
            <p className="text-blue-500 font-bold">나의 포인트</p>
            <p>500</p>
          </div>
          <div className="flex justify-between w-full px-[10px] mt-[5px]">
            <p className="text-blue-500 font-bold">응모건수</p>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
