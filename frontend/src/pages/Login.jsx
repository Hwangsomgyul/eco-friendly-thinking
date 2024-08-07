import React, { useState } from "react";
import { LoginSection } from "../components/LoginSection";
import { ChartSection } from "../components/ChartSection";
import { ChartModal01 } from "../components/ChartModal/ChartModal01";
import { ChartModal02 } from "../components/ChartModal/ChartModal02";
import { ChartModal03 } from "../components/ChartModal/ChartModal03";
import { ChartModal04 } from "../components/ChartModal/ChartModal04";

export const Login = () => {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [open03, setOpen03] = useState(false);
  const [open04, setOpen04] = useState(false);

  const handleOpenModal01 = () => {
    setOpen01(true);
  };
  const handleOpenModal02 = () => {
    setOpen02(true);
  };
  const handleOpenModal03 = () => {
    setOpen03(true);
  };
  const handleOpenModal04 = () => {
    setOpen04(true);
  };

  const handleCloseModal01 = () => {
    setOpen01(false);
  };
  const handleCloseModal02 = () => {
    setOpen02(false);
  };
  const handleCloseModal03 = () => {
    setOpen03(false);
  };
  const handleCloseModal04 = () => {
    setOpen04(false);
  };

  return (
    <main className="w-full h-full bg-blackGreen">
      <div className="flex h-full gap-8 mx-12">
        <LoginSection></LoginSection>
        <ChartSection num={"01"} text={"차트설명"} onClick={handleOpenModal01}></ChartSection>
        <ChartSection num={"02"} text={"차트설명"} onClick={handleOpenModal02}></ChartSection>
        <ChartSection num={"03"} text={"차트설명"} onClick={handleOpenModal03}></ChartSection>
        <ChartSection num={"04"} text={"차트설명"} onClick={handleOpenModal04}></ChartSection>
      </div>

      {open01 && <ChartModal01 onClose={handleCloseModal01} />}
      {open02 && <ChartModal02 onClose={handleCloseModal02} />}
      {open03 && <ChartModal03 onClose={handleCloseModal03} />}
      {open04 && <ChartModal04 onClose={handleCloseModal04} />}

    </main>
  );
};
