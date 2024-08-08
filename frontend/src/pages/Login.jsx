import React, { useState } from 'react';
import { LoginSection } from '../components/LoginSection';
import { ChartSection } from '../components/ChartSection';
import { ChartModal01 } from '../components/ChartModal/ChartModal01';
import { ChartModal02 } from '../components/ChartModal/ChartModal02';
import { ChartModal03 } from '../components/ChartModal/ChartModal03';
import { ChartModal04 } from '../components/ChartModal/ChartModal04';

import { MiniChart01 } from '../asserts/Chart/WasteYearly';
import { MiniChart02 } from '../asserts/Chart/WasteWithPop';
import { MiniChart03 } from '../asserts/Chart/WasteWithRecycle';
import { MiniChart04 } from '../asserts/Chart/RecycleRate';

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

  const text1 = (
    <React.Fragment>
      우리는 쓰레기를 얼마나 배출할까?
      <br />
      <br />
      서울특별시 2000~2022
      <br />
      생활폐기물 발생량과 재활용률
    </React.Fragment>
  );

  const text2 = (
    <React.Fragment>
      감소하는 인구 수, 쓰레기도 줄었을까?
      <br />
      <br />
      서울특별시 2000~2022
      <br />
      생활인구와 일일 폐기물 처리량
    </React.Fragment>
  );

  const text3 = (
    <React.Fragment>
      줄지 않는 쓰레기, 어떻게 처리될까?
      <br />
      <br />
      서울특별시 2000~2022
      <br />
      일일 폐기물 처리량과 재활용률
    </React.Fragment>
  );

  const text4 = (
    <React.Fragment>
      재활용, 다 같은 재활용일까?
      <br />
      <br />
      서울특별시 2000~2022
      <br />
      열적 재활용과 물질 재활용
    </React.Fragment>
  );
  const randerChart1 = () => {
    return <MiniChart01></MiniChart01>;
  };
  const randerChart2 = () => {
    return <MiniChart02></MiniChart02>;
  };
  const randerChart3 = () => {
    return <MiniChart03></MiniChart03>;
  };
  const randerChart4 = () => {
    return <MiniChart04></MiniChart04>;
  };

  return (
    <main className="h-full w-full bg-blackGreen">
      <div className="mx-12 flex h-full gap-8">
        <LoginSection></LoginSection>
        <ChartSection
          num={'01'}
          text={text1}
          onClick={handleOpenModal01}
          chart={randerChart1()}
        ></ChartSection>
        <ChartSection
          num={'02'}
          text={text2}
          onClick={handleOpenModal02}
          chart={randerChart2()}
        ></ChartSection>
        <ChartSection
          num={'03'}
          text={text3}
          onClick={handleOpenModal03}
          chart={randerChart3()}
        ></ChartSection>
        <ChartSection
          num={'04'}
          text={text4}
          onClick={handleOpenModal04}
          chart={randerChart4()}
        ></ChartSection>
      </div>

      {open01 && <ChartModal01 onClose={handleCloseModal01} />}
      {open02 && <ChartModal02 onClose={handleCloseModal02} />}
      {open03 && <ChartModal03 onClose={handleCloseModal03} />}
      {open04 && <ChartModal04 onClose={handleCloseModal04} />}
    </main>
  );
};
