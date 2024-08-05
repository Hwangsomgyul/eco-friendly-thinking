import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/image1.jpg";
import edit from "../images/edit.svg";
import { UserInfo } from "../components/UserInfo";
import { Notice } from "../components/Notice";
import { StoreBanner } from "../components/StoreBanner";

const eventUrl = "/images/banner.png";

const Store = () => {
  // 이벤트 api 호출
  // 불러서 map으로 링크 만들어주기

  return (
    <div>
      <div className="w-[1400px] mx-auto mt-[70px] justify-center ">
        <div className="flex justify-between">
          <div className="border-2 border-lightGreen w-[1040px] rounded-lg drop-shadow bg-white">
            <div className="flex flex-col gap-[40px] ">
              <div className="bg-white my-[30px] mx-[40px]">
                <div className="flex gap-[20px]">
                  <Link
                    to="/Store"
                    className="text-xl text-blackGreen font-bold"
                  >
                    상점
                  </Link>
                  <p className="text-xl text-blackGreen font-bold">/</p>{" "}
                  <Link
                    to="/Store/over"
                    className="text-xl text-slate-400 font-medium"
                  >
                    종료된 이벤트
                  </Link>
                </div>
              </div>
              <div className="bg-white mx-[40px]">
                <div className="flex gap-30 flex-wrap">
                  <StoreBanner url={eventUrl} handleLink={true}></StoreBanner>
                  <StoreBanner url={eventUrl}></StoreBanner>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <UserInfo></UserInfo>
            <Notice></Notice>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
