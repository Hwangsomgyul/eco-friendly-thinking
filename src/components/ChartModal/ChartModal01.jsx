import React from "react";
import { WasteWithPop } from "../../asserts/Chart/WasteWithPop";
import "./ChartModal.css";

export const ChartModal01 = ({ isOpen, onClose }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const closeModal = () => setIsOpen(false);

  return (
    <aside className={`bg-blackGreen ${isOpen ? "on" : ""}`}>
      <div className="txt">
        <h1>01</h1>
        <span className="hover:text-white">CLOSE</span>
      </div>
      <figure>
        <WasteWithPop />
        <div>
          <p>
            서울시 생활폐기물은 최근 22년동안 매립양은 줄고, 재활용량과 소각량이
            상대적으로 증가했습니다.
          </p>
          <p>서울시 생활폐기물 관련 재활용률은 60%대 입니다.</p>
          <p>더 높은 재활용률을 위해서 어떤 일을 할 수 있을까요?</p>
        </div>
      </figure>
    </aside>
  );
};
