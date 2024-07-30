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

const MixChartExample = () => {
  const react_dummy = [10, 10, 10, 10, 20, 20, 20, 20, 30, 30, 30, 30];
  const vue_dummy = [10, 30, 10, 10, 10, 20, 30, 30, 20, 20, 20, 30];
  const total_dummy = react_dummy.map((item, idx) => item + vue_dummy[idx]);
  const labels_dummy = new Array(12).fill(0).map((_, idx) => idx + 1 + "월");
  //chart data
  const mixData = {
    labels: labels_dummy,
    datasets: [
      {
        type: "line",
        label: "React",
        data: react_dummy,
        borderColor: "#DD5353",
        backgroundColor: "#DD5353",
        borderWidth: 2, // 선의 크기
        pointBorderWidth: 1, // point의 크기
        tension: 0.1, // line 차트일 경우 선의 휘어짐 정도
      },
      {
        type: "line",
        label: "Vue",
        data: vue_dummy,
        borderColor: "#5F9DF7",
        backgroundColor: "#5F9DF7",
        borderWidth: 2,
        pointBorderWidth: 1,
        tension: 0.1, // line 차트일 경우 선의 휘어짐 정도
      },
      {
        type: "bar",
        label: "전체",
        backgroundColor: "#ddd",
        data: total_dummy,
        borderColor: "#ddd",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: "1000px" }}>
      <Chart type="bar" data={mixData} />
    </div>
  );
};
export default MixChartExample;
