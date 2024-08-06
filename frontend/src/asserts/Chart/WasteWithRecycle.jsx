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
const years = new Array(23).fill(0).map((_, idx) => idx + 2000 + "년");
const label_years = years.map((idx) => {
  if (idx % 5 !== 0) {
    return "";
  } else {
    return idx + "년";
  }
});
const labels = years; //라벨 넣기

/**
 * padStart
 *
 * year.padStart(3 - year.length, '0');
 */

// 지역구에 따라 변경되는 데이터들

const waste_total = [
  32192, 42737, 48328, 48189, 45839, 32317, 45427, 44204, 44942, 43786, 37747,
  39464, 37844, 34474, 37200, 41711, 45118, 45894, 46188, 47643, 51887, 48036,
  43215,
];
const waste_land = [
  12045, 13924, 17329, 13596, 11819, 3911, 4838, 4684, 3868, 3156, 2503, 3127,
  3769, 2657, 3140, 3660, 3257, 3157, 3023, 1953, 2213, 2313, 1107,
];
const waste_burn = [
  934, 1101, 1113, 1485, 1549, 1233, 1452, 2031, 2303, 2379, 2132, 2659, 2665,
  2708, 2528, 2476, 2741, 2478, 2441, 2519, 2486, 2455, 2466,
];
const waste_recycle = [
  18179, 26462, 28202, 31919, 31336, 26043, 38660, 37479, 38761, 37742, 32404,
  33090, 31119, 29110, 31532, 35576, 39120, 40258, 40725, 42161, 46424, 41615,
  38176,
];
const recycle_rate = [
  56, 62, 58, 66, 68, 81, 85, 85, 86, 86, 86, 84, 82, 84, 85, 85, 87, 88, 88,
  88, 89, 87, 88,
];

// 동적 축 일치 로직
// 축의 최소, 최대를 동적으로 넣기 위해서 최대 최소값 추출 +- 10000하기
// (최대 - 최소) / 5 해서 축 개수 맞추기
// 10000 단위로 버려서 뒤에 숫자 깔끔하게

// const minPop = Math.min(...population) - 10000;
// const maxPop = Math.max(...population) + 10000;
const maxWaste = Math.max(...waste_total);

//chart data
const datas = {
  labels: labels, // x축
  datasets: [
    {
      type: "line",
      yAxisID: "y-axis-2",
      label: "재활용률(%)",
      data: recycle_rate,
      backgroundColor: "#D6EFD8",
      borderColor: "#D6EFD8",
      borderWidth: 2,
      tension: 0.2, // 선의 휘어짐 정도
    },
    {
      type: "bar",
      label: "매립(톤/일)", // 범례표시
      data: waste_land,
      backgroundColor: "#ECAB7C",
    },
    {
      type: "bar",
      label: "소각(톤/일)",
      data: waste_burn,
      backgroundColor: "#F4E285",
    },
    {
      type: "bar",
      label: "재활용(톤/일)",
      data: waste_recycle,
      backgroundColor: "#A7C957",
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
      text: "서울특별시 재활용률 및 일일 폐기물 처리량", // 차트 제목
      font: {
        size: 20, // 폰트 크기
      },
      color: "#FFFFFF", // 제목 색상
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false, // x축 그리드 숨기기
      },
      ticks: {
        // 라벨 색상 변경
        color: function (context) {
          if (context.index % 5 === 0 || context.index === labels.length - 1) {
            return "#F5F5F5"; // 5의 배수거나 인덱스 마지막 년도는
          }
          return "rgba(0, 0, 0, 0)"; // 나머지는 투명
        },
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      ticks: {
        color: "#C0C0C0", // 눈금 색상
      },
      grid: {
        color: "#C0C0C0", // 그리드 색상
      },
    },
    "y-axis-2": {
      type: "linear", // 보조축 사용
      position: "right",
      min: 0,
      max: 100,
      grid: {
        display: false,
        drawOnChartArea: true, // 두 y축의 그리드 라인 겹치게 설정
        color: "#C0C0C0",
        borderDash: [5, 5], // 대시 패턴 설정 [대시 길이, 공백 길이],
      },
      ticks: {
        color: "#C0C0C0", // 눈금 색상
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
export const WasteWithRecycle = () => {
  return (
    <div style={{ backgroundColor: "#2B422A" }}>
      <Chart data={datas} options={options} />
    </div>
  );
};

// 컴포넌트의 리렌더링 조건
// 1. State가 변경되었을 때
// 2. Prop이 변경되었을 때
