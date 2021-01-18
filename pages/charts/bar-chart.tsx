import { Bar } from 'react-chartjs-2';

const options = {
  legend: {
    display: false, // label 보이기 여부
  },
  scales: {
    yAxes: [{
      ticks: {
        min: 0, // y축 스케일에 대한 최소값 설정
        stepSize: 1, // y축 그리드 한 칸당 수치
      },
    }],
  },

  // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
  // true : 크기가 알아서 결정됨.
  maintainAspectRatio: false,
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const BarChart: React.FC = () => {
  return (
    <div>
      <Bar data={data} options={options} height={300}/>
    </div>
  );
};

export default BarChart;
