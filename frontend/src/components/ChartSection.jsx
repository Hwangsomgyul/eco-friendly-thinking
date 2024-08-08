import React, { useState } from 'react';
import { WasteWithPop } from '../asserts/Chart/WasteWithPop';
import './ChartSection.css';
import { MiniChart04 } from '../asserts/Chart/RecycleRate';

export const ChartSection = ({ num, text, onClick, chart }) => {
  return (
    <article className="w-1/5" onClick={onClick}>
      <div className="inner h-full w-full pt-100" id="chartSection">
        <div className="flex h-full flex-col justify-around p-5 transition delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-800/15">
          <div>
            <div className="w-1/5 border-b-2 border-lightGreen">
              <h2 className="text-gray-300">{num}</h2>
            </div>
            <p className="pt-8 text-gray-400">{text}</p>
          </div>
          <div className="">{chart}</div>
        </div>
      </div>
    </article>
  );
};
