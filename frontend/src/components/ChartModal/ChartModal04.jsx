import React from "react";
import { RecycleRate } from "../../asserts/Chart/RecycleRate";
import "./ChartModal.css";

export const ChartModal04 = ({ isOpen, onClose }) => {

  return (
    <aside className={`bg-blackGreen animate-fadeOn`}>
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
          <p>그러나 EU는 물질 재활용*만을 재활용의 범주로 보고 있어요.</p>
          <p>물질 재활용률~~~</p>
        </div>
      </figure>
    </aside>
  );
};
