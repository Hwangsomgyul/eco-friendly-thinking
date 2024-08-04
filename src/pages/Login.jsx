import React, { useState } from "react";
import { LoginSection } from "../components/LoginSection";
import { ChartSection } from "../components/ChartSection";
import { ChartModal01 } from "../components/ChartModal/ChartModal01";

export const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="w-full h-full bg-blackGreen">
      <div className="flex h-full gap-8 mx-12">
        <LoginSection></LoginSection>
        <ChartSection
          num={"01"}
          text={"차트설명"}
          onClick={openModal}
        ></ChartSection>
        <ChartSection
          num={"02"}
          text={"차트설명"}
          onClick={openModal}
        ></ChartSection>
        <ChartSection
          num={"03"}
          text={"차트설명"}
          onClick={openModal}
        ></ChartSection>
        <ChartSection
          num={"04"}
          text={"차트설명"}
          onClick={openModal}
        ></ChartSection>
      </div>

      <ChartModal01 isOpen={isModalOpen}></ChartModal01>
    </main>
  );
};
