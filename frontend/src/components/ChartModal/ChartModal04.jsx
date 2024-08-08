import React from 'react';
import { RecycleRate } from '../../asserts/Chart/RecycleRate';
import './ChartModal.css';

export const ChartModal04 = ({ isOpen, onClose }) => {
  return (
    <aside className={`animate-fadeOn bg-blackGreen`}>
      <div className="txt">
        <h1 className="">04</h1>
        <span className="hover:text-white" onClick={onClose}>
          CLOSE
        </span>
      </div>
      <figure>
        <RecycleRate />
        <div>
          <p>
            대한민국은 열적 재활용*까지 포함하여 재활용률을 산출하고 있습니다.
          </p>
          <p>그러나 EU는 물질 재활용만을 재활용의 범주로 보고 있어요.</p>
          <p>
            다회용기 사용으로 생활폐기물을 줄이는 친환경적 사고, 함께 시작해요!
          </p>
          <p className="text-xs italic text-gray-400">
            열적 재활용 : 소각의 일종인 에너지 회수도 재활용의 범주에 포함하는
            방법
          </p>
          <p className="text-xs italic text-gray-400">
            물질 재활용 : 플라스틱의 화학구조를 유지한 상태에서 플라스틱으로
            재생하는 방법
          </p>
        </div>
      </figure>
    </aside>
  );
};
