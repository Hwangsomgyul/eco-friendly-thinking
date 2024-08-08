import React from 'react';
import { WasteYearly } from '../../asserts/Chart/WasteYearly';
import './ChartModal.css';

export const ChartModal01 = ({ isOpen, onClose }) => {
  return (
    <aside className={`animate-fadeOn bg-blackGreen`}>
      <div className="txt">
        <h1 className="">01</h1>
        <span className="hover:text-white" onClick={onClose}>
          CLOSE
        </span>
      </div>
      <figure>
        <WasteYearly />
        <div>
          <p>
            서울시 생활폐기물은 최근 22년동안 매립양은 줄고, 재활용량과 소각량이
            상대적으로 증가했습니다.
          </p>
          <p>서울시 생활폐기물 관련 재활용률은 60%대 입니다.</p>
          <p>차트에 마우스 커서를 올려 수치를 확인해보세요!</p>
        </div>
      </figure>
    </aside>
  );
};
