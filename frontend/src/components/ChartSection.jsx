import React, { useState } from "react";
import { WasteWithPop } from "../asserts/Chart/WasteWithPop";
import "./ChartSection.css";

export const ChartSection = ({ num, text, onClick }) => {
  return (
    <article className="w-1/5" onClick={onClick}>
      <div className="pt-100 w-full h-full inner" id="chartSection">
        <div className="h-full flex flex-col justify-around p-5">
          <div>
            <div className="border-b-2 border-lightGreen w-1/5">
              <h2 className="text-gray-300">{num}</h2>
            </div>
            <p className="pt-8 text-gray-400">{text}</p>
          </div>
          <div className="bg-white chart">
            <p>simple 차트 삽입</p>
          </div>
        </div>
      </div>
    </article>
  );
};
