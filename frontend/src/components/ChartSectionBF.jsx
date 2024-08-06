import React, { useState } from "react";
import { WasteWithPop } from "../asserts/Chart/WasteWithPop";
import "./ChartSection.css";

const LoginModal = ({ isVisible, content, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      <aside className="bg-blackGreen">
        <div class="txt">
          <h1>01</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <span onClick={onClose}>CLOSE</span>
        </div>
        <figure>
          <video src="vids/vid1.mp4" loop muted></video>
        </figure>
      </aside>
    </>
  );
};

export const ChartSection = ({ num, text }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = () => {
    setModalContent({ num, text });
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <>
      {/* <div id="slide" className="w-1/5"></div> */}
      <article className="w-1/5" onClick={showModal}>
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
      <LoginModal
        isVisible={modalVisible}
        content={modalContent}
        onClose={closeModal}
      />
    </>
  );
};
