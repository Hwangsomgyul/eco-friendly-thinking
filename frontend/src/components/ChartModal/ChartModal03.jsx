import React from "react";
import { WasteWithRecycle } from "../../asserts/Chart/WasteWithRecycle";
import "./ChartModal.css";

export const ChartModal03 = ({ isOpen, onClose }) => {

  return (
    <aside className={`bg-blackGreen animate-fadeOn`}>
      <div className="txt">
        <h1 className="">03</h1>
        <span className="hover:text-white" onClick={onClose}>
          CLOSE
        </span>
      </div>
      <figure>
        <WasteWithRecycle />
        <div>
          <p>
            주요 폐기물 처리량의 비율과 재활용률을 확인해보세요!
          </p>
          <p>지속적인 환경 개선 노력으로, 2022년 재활용률이 88%까지 높아졌습니다.</p>
          <p>그러나 재활용률이 현재 재활용 실태를 보여줄 수 있을까요?</p>
        </div>
      </figure>
    </aside>
  );
};
