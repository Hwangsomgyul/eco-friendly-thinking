import React from 'react';
import { Chart } from 'react-chartjs-2';

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
} from 'chart.js';

ChartJS.register(
  ...registerables,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement,
);

// <----- 정적 데이터 ----->
const years = new Array(23).fill(0).map((_, idx) => idx + 2000 + '년');
const label_years = years.map((idx) => {
  if (idx % 5 !== 0) {
    return '';
  } else {
    return idx + '년';
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
  11438, 11968, 12052, 12058, 11673, 11170, 11420, 11525, 11447, 11337, 10020,
  9440, 9189, 8559, 9614, 9439, 9608, 9217, 9493, 9847, 9673, 10853, 10914,
];

const recycle_nonfood = [
  3851, 3968, 4094, 4134, 3776, 3999, 4073, 4095, 4104, 4274, 3211, 2646, 2693,
  2409, 3243, 3336, 3474, 3309, 3641, 3729, 3869, 3628, 4354,
];
const recycle_food = [
  1297, 1714, 1758, 2042, 2650, 3189, 3273, 3350, 3405, 3447, 3382, 3347, 3312,
  3072, 3181, 3166, 3075, 2872, 2816, 2806, 2540, 2457, 2483,
];
const waste_burn = [
  627, 822, 775, 765, 749, 1139, 1242, 1673, 2027, 2135, 1982, 2345, 2465, 2304,
  2263, 2218, 2292, 2238, 2168, 2246, 2289, 2275, 2265,
];
const waste_land = [
  5664, 5464, 5426, 5117, 4498, 2844, 2832, 2406, 1910, 1480, 1446, 1102, 719,
  774, 927, 719, 766, 799, 869, 979, 949, 1485, 899,
];
const waste_etc = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 28, 1009, 914,
];
const recycle_rate_nonf = [
  34, 33, 34, 34, 32, 36, 36, 36, 36, 38, 32, 28, 29, 28, 34, 35, 36, 36, 38,
  38, 40, 33, 40,
];
const recycle_rate_f = [
  11, 14, 15, 17, 23, 29, 29, 29, 30, 30, 34, 35, 36, 36, 33, 34, 32, 31, 30,
  28, 26, 23, 23,
];

// 동적 축 일치 로직
// 축의 최소, 최대를 동적으로 넣기 위해서 최대 최소값 추출 +- 10000하기
// (최대 - 최소) / 5 해서 축 개수 맞추기
// 10000 단위로 버려서 뒤에 숫자 깔끔하게

//chart data
const mixRecycle_Waste = {
  labels: labels, // x축
  datasets: [
    {
      type: 'line',
      yAxisID: 'y-axis-2',
      label: '재활용률(음식)',
      data: recycle_rate_f,
      backgroundColor: '#4B332C',
      borderColor: '#4B332C',
      borderWidth: 2,
      tension: 0.2, // 선의 휘어짐 정도
    },
    {
      type: 'line',
      yAxisID: 'y-axis-2',
      label: '재활용률(음식 외)',
      data: recycle_rate_nonf,
      backgroundColor: '#FFFFFF',
      borderColor: '#4B332C',
      borderWidth: 2,
      tension: 0.2, // 선의 휘어짐 정도
    },
    {
      type: 'bar',
      label: '매립(톤/일)', // 범례표시
      data: waste_land,
      backgroundColor: '#F7A399',
    },
    {
      type: 'bar',
      label: '소각(톤/일)',
      data: waste_burn,
      backgroundColor: '#F4E285',
    },
    {
      type: 'bar',
      label: '재활용 음식 외(톤/일)',
      data: recycle_nonfood,
      backgroundColor: '#7A9240',
    },
    {
      type: 'bar',
      label: '재활용 음식 외(톤/일)',
      data: recycle_food,
      backgroundColor: '#A7C957',
    },
    {
      type: 'bar',
      label: '기타',
      data: waste_etc,
      backgroundColor: '#D6EFD8',
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
        color: '#FFFFFF', // 범례 폰트 색상 흰색으로 설정
        font: {
          size: 10, // 폰트 크기
        },
      },
    },
  },
  title: {
    display: true, // 제목 표시 여부
    text: '서울특별시 연간 생활폐기물 발생랼 및 재활용률', // 차트 제목
    font: {
      size: 20, // 폰트 크기
    },
    color: '#FFFFFF', // 제목 색상
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
            return '#F5F5F5'; // 5의 배수거나 인덱스 마지막 년도는
          }
          return 'rgba(0, 0, 0, 0)'; // 나머지는 투명
        },
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      ticks: {
        color: '#C0C0C0', // 눈금 색상
      },
      grid: {
        color: '#C0C0C0', // 그리드 색상
      },
    },
    'y-axis-2': {
      type: 'linear', // 보조축 사용
      stacked: true,
      position: 'right',
      max: 100,

      grid: {
        display: false,
        drawOnChartArea: true, // 두 y축의 그리드 라인 겹치게 설정
        color: '#C0C0C0',
        borderDash: [5, 5], // 대시 패턴 설정 [대시 길이, 공백 길이],
      },
      ticks: {
        color: '#C0C0C0', // 눈금 색상
      },
    },
  },
  interaction: {
    mode: 'nearest', // 툴팁을 가장 가까운 데이터 포인트에 대해 표시
    intersect: false,
  },
};

const miniOptions = {
  plugins: {
    legend: {
      display: false, // 범례 숨기기
    },
    title: {
      display: false, // 제목 숨기기
    },
    tooltip: {
      enabled: false, // 툴팁 비활성화
    },
  },
  interaction: {
    mode: 'none', // 모든 인터랙션 비활성화
  },
  scales: {
    x: {
      grid: {
        display: false, // x축 그리드 숨기기
      },
      ticks: {
        display: false, // x축 눈금 숨기기
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false, // y축 그리드 숨기기
      },
      ticks: {
        display: false, // y축 눈금 숨기기
      },
    },
    'y-axis-2': {
      beginAtZero: true,
      grid: {
        display: false, // y축 그리드 숨기기
      },
      ticks: {
        display: false, // y축 눈금 숨기기
      },
    },
  },
};

// 차트 그리기
export const WasteYearly = () => {
  return (
    <div>
      <Chart data={mixRecycle_Waste} options={options} />
    </div>
  );
};

export const MiniChart01 = () => {
  return (
    <div>
      <Chart data={mixRecycle_Waste} options={miniOptions} />
    </div>
  );
};

// 컴포넌트의 리렌더링 조건
// 1. State가 변경되었을 때
// 2. Prop이 변경되었을 때
