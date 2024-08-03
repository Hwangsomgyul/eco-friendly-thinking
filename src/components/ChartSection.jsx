import React from "react";
import { WasteWithPop } from "./WasteWithPop";
import "./ChartSection.css";

export const ChartSection = ({ num, text }) => {
  return (
    <>
      {/* <div id="slide" className="w-1/5"></div> */}
      <article className="w-1/5">
        <div className="pt-100 w-full h-full inner" id="chartSection">
          <div className="h-full flex flex-col justify-around p-5">
            <div>
              <div className="border-b-2 border-lightGreen w-1/5">
                <h2 className="text-gray-300 text">{num}</h2>
              </div>
              <p className="pt-8 text-gray-400">{text}</p>
            </div>
            <div className="bg-white chart">
              <p>simple 차트 삽입</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
