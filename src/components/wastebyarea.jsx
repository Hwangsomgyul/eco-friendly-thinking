import React from "react";
import { Chart } from "react-chartjs-2";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  registerables,
} from "chart.js";

ChartJS.register(
  ...registerables,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement
);

// <----- 정적 데이터 ----->
// 라벨
const years = new Array(23).fill(0).map((_, idx) => idx + 2000 + "년");

// 지역구에 따라 변경되는 데이터들

const population = [
  32192, 42737, 48328, 48189, 45839, 32317, 45427, 44204, 44942, 43786, 37747,
  39464, 37844, 34474, 37200, 41711, 45118, 45894, 46188, 47643, 51887, 48036,
  43215,
];

//chart data
const seoulData = {
  labels: years, // x축
  datasets: [
    {
      type: "line",
      yAxisID: "y-axis-2",
      label: "total",
      data: population,
      backgroundColor: "#ddd",
      borderColor: "#ddd",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "React", // 범례표시
      data: react_dummy,
      borderColor: "#DD5353",
      backgroundColor: "#DD5353",
      borderWidth: 2, // 선의 크기
      pointBorderWidth: 1, // point의 크기
      tension: 0.1, // line 차트일 경우 선의 휘어짐 정도
    },
    {
      type: "bar",
      label: "Vue",
      data: vue_dummy,
      borderColor: "#5F9DF7",
      backgroundColor: "#5F9DF7",
      borderWidth: 2,
      pointBorderWidth: 1,
      tension: 0.1, // line 차트일 경우 선의 휘어짐 정도
    },
  ],
};

// <----- 차트 옵션 / 누적, 제목 ----->
const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  "y-axis-2": {
    type: "linear", // 보조축 사용
    position: "right",
    beginAtZero: true,
    grid: {
      drawOnChartArea: false, // 메인 y축의 그리드와 겹치지 않도록 설정
    },
  },
};

// 데이터 가공 함수
export const handleData = () => {
  // 전달받은 props로 data 구성 후 리턴 data로 전달
  return data;
};

// 차트 그리기
const drawChart = () => {
  // 지역구 list 선택을 구독하는 useEffect
  // if (이전에 선택했던 지역구인지?) -> False : api 요청
  // 요청받은 데이터 처리 함수 (따로 빼기)
  // 변경된 data는 handleData props 전달
  // handleData return값을 차트로 전달해서 그리기
  return (
    <div style={{ width: "800px" }}>
      <Chart data={mixData} options={options} />
    </div>
  );
};
