import React from "react";
import { LoginSection } from "../components/LoginSection";
import { ChartSection } from "../components/ChartSection";

export const Login = () => {
  return (
    <main className="w-full h-full bg-blackGreen">
      <div className="flex h-full gap-8 mx-12">
        <LoginSection></LoginSection>
        <ChartSection num={"01"} text={"차트설명"}></ChartSection>
        <ChartSection num={"02"} text={"차트설명"}></ChartSection>
        <ChartSection num={"03"} text={"차트설명"}></ChartSection>
        <ChartSection num={"04"} text={"차트설명"}></ChartSection>
      </div>

      {/* <aside>
        <div class="txt">
          <h1>01</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <span>CLOSE</span>
        </div>
        <figure>
          <video src="vids/vid1.mp4" loop muted></video>
        </figure>
      </aside> */}
    </main>
  );
};
