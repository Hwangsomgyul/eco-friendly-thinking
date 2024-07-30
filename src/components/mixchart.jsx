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

// <----- data 따로 분리 ----->
const react_dummy = [
  10, 10, 10, 10, 20, 20, 20, 20, 30, 30, 30, 30, 10, 10, 10, 20, 20, 20, 20,
  30, 30, 30, 30,
];
const vue_dummy = [
  10, 30, 10, 10, 10, 10, 30, 10, 10, 20, 30, 30, 20, 20, 20, 30, 20, 30, 30,
  20, 20, 20, 30,
];
const total_dummy = [
  10, 1, 5, 9, 10, 10, 10, 5, 9, 8, 7, 20, 20, 9, 10, 10, 10, 4, 9, 6, 20, 20,
  20, 4,
];
const labels_dummy = new Array(23).fill(0).map((_, idx) => idx + 2000 + "년");

//chart data
const mixData = {
  labels: labels_dummy, // x축
  datasets: [
    {
      type: "line",
      yAxisID: "y-axis-2",
      label: "total",
      data: total_dummy,
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
    type: "linear",
    position: "right",
    beginAtZero: true,
    grid: {
      drawOnChartArea: false, // 메인 y축의 그리드와 겹치지 않도록 설정
    },
  },
};

// <----- 차트 그리는 함수 ----->
export const MixStackedBar = () => {
  // 현재 선 그래프와 막대중첩그래프를 구현하는 것 하는 중
  return (
    <div style={{ width: "800px" }}>
      <Chart data={mixData} options={options} />
    </div>
  );
};
