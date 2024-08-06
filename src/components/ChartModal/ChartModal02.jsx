import React from "react";
import { WasteWithPop } from "../../asserts/Chart/WasteWithPop";
import "./ChartModal.css";

export const ChartModal02 = ({ isOpen, onClose }) => {

  return (
    <aside className={`bg-blackGreen animate-fadeOn`}>
      <div className="txt">
        <h1 className="">02</h1>
        <span className="hover:text-white" onClick={onClose}>
          CLOSE
        </span>
      </div>
      <figure>
        <WasteWithPop />
        <div>
        <p>2005년 이후로 매립량과 소각량은 크게 감소하였고, 재활용량은 증가하였습니다.</p>
          <p>
          2010년 이후로 서울 생활인구가 감소했음에도 전체 폐기물 처리량이 감소하지 않는 이유는<br></br>생활인구 외 이동인구 증가, 코로나 이후 배달 활성화로 관련 폐기물이 증가한 이유 등이 있습니다.
          </p>
          
          <p>다음 표에서 연도별 재활용률에 대해 알아보세요!</p>
        </div>
      </figure>
    </aside>
  );
};
