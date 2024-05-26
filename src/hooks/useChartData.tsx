import { useState, useEffect } from 'react';
import { Generationmix } from '../interfaces/CarbonDataResponse';

interface ChartData {
  labels: string[];
  data: number[];
}

interface Props {
  dataGraph: Generationmix[];
}

const useChartData = ({ dataGraph }: Props): ChartData => {
  const [chartData, setChartData] = useState<ChartData>({ labels: [], data: [] });

  useEffect(() => {
    // Extracting labels and data from dataGraph
    const labels = dataGraph.map(item => item.fuel);
    const data = dataGraph.map(item => item.perc);

    // Update chart data state
    setChartData({ labels, data });
  }, [dataGraph]);

  return chartData;
};

export default useChartData;