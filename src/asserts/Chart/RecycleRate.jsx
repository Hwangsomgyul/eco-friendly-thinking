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
const years = [2017, 2021];
const labels = years; //라벨 넣기

/**
 * padStart
 *
 * year.padStart(3 - year.length, '0');
 */

// 지역구에 따라 변경되는 데이터들

const rate_total = [22.7, 27];
const rate_pla = [13, 16.4];

// 동적 축 일치 로직
// 축의 최소, 최대를 동적으로 넣기 위해서 최대 최소값 추출 +- 10000하기
// (최대 - 최소) / 5 해서 축 개수 맞추기
// 10000 단위로 버려서 뒤에 숫자 깔끔하게

//chart data
const datas = {
  labels: labels, // x축
  datasets: [
    {
      type: "bar",
      label: "전체 플라스틱의 물질 재활용률(%)", // 범례표시
      data: rate_total,
      backgroundColor: "#ECAB7C",
    },
    {
      type: "bar",
      label: "일회용 플라스틱의 물질 재활용률(%)",
      data: rate_pla,
      backgroundColor: "#F4E285",
    },
  ],
};

// <----- 차트 옵션 / 누적, 제목 ----->
const options = {
  // responsive: false, // 자동 반응형 설정
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#FFFFFF", // 범례 폰트 색상 흰색으로 설정
      },
    },
    title: {
      display: true, // 제목 표시 여부
      text: "EU 기준 플라스틱 재활용률(%)", // 차트 제목
      font: {
        size: 20, // 폰트 크기
      },
      color: "#FFFFFF", // 제목 색상
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // x축 그리드 숨기기
      },
      ticks: {
        // 라벨 색상 변경
        color: "#F5F5F5",
        font: {
          size: 15, // 라벨 폰트 크기
        },
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: 50,
      ticks: {
        color: "#C0C0C0", // 눈금 색상
        stepSize: 10,
      },
      grid: {
        color: "#C0C0C0", // 그리드 색상
      },
    },
  },
  interaction: {
    mode: "nearest", // 툴팁을 가장 가까운 데이터 포인트에 대해 표시
    intersect: false,
  },
};

// 데이터 가공 함수
// export const handleData = () => {
//   // 전달받은 props로 data 구성 후 리턴 data로 전달
//   return data;
// };

// 차트 그리기
export const RecycleRate = () => {
  return (
    <div style={{ backgroundColor: "#2B422A" }}>
      <Chart data={datas} options={options} />
    </div>
  );
};

// 컴포넌트의 리렌더링 조건
// 1. State가 변경되었을 때
// 2. Prop이 변경되었을 때
