import React from "react";

export const Notice = () => {
  return (
    <div className="rounded-xl border-2 w-[300px] h-[400px] flex border-lightGreen bg-white drop-shadow">
      <div className="mt-[40px] ml-[40px]">
        <p className="text-[20px]">당첨 결과 공지</p>
        <div className="mt-[40px] flex flex-col gap-[10px]">
          <p className="text-gray-500 text-[20px]">이런이벤트 당첨자 결과</p>
          <p className="text-gray-500 text-[20px]">이런이벤트 당첨자 결과</p>
          <p className="text-gray-500 text-[20px]">이런이벤트 당첨자 결과</p>
          <p className="text-gray-500 text-[20px]">이런이벤트 당첨자 결과</p>
          <p className="text-gray-500 text-[20px]">이런이벤트 당첨자 결과</p>
        </div>
      </div>
    </div>
  );
};
