import BarChart from './bar-chart';
import DoughtnutChart from './doughnut-chart';
import LineChart from './line-chart';

const ChartsPage: React.FC = () => {
  return (
    <div>
      <BarChart/>
      <DoughtnutChart/>
      <LineChart/>
    </div>
  );
};

export default ChartsPage;
