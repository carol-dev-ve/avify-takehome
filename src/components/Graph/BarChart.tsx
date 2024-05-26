import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Generationmix } from '../../interfaces/CarbonDataResponse';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    dataGraph: Generationmix[];
}

const BarChart: React.FC<Props> = ({ dataGraph }: Props) => {
    const [chartData, setChartData] = useState<{ labels: string[]; data: number[] }>({ labels: [], data: [] });

    useEffect(() => {
        // Extracting labels and data from dataGraph
        const labels = dataGraph.map(item => item.fuel);
        const data = dataGraph.map(item => item.perc);

        // Update chart data state
        setChartData({ labels, data });
    }, [dataGraph]);

    return (
        <div className="w-full flex justify-center">
            <Bar
                data={{
                    labels: chartData.labels,
                    datasets: [{
                        label: 'Graph for UK Energy',
                        data: chartData.data,
                        backgroundColor: ['#3366cc', '#990099', '#109618', '#dc3912', '#ff9900', '#3366cc', '#990099', '#109618', '#dc3912', '#ff9900'], // Bar color
                        borderWidth: 1,
                    }],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Graph for UK Energy',
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Fuel Type',
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Percentage',
                            },
                            min: 0, // Minimum value on y-axis
                            max: 100, // Maximum value on y-axis
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;