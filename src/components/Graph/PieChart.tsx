import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Generationmix } from '../../interfaces/CarbonDataResponse';
import useChartData from '../../hooks/useChartData';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Props {
    dataGraph: Generationmix[]
}

const PieChart = ({ dataGraph }: Props) => {

    const chartData = useChartData({ dataGraph })

    return (
        <div className="w-full flex justify-center"  data-testid="bar-chart">
            <Pie
                data={{
                    labels: chartData.labels,
                    datasets: [{
                        label: `Graph for UK Energy`,
                        backgroundColor: ['#3366cc', '#990099', '#109618', '#dc3912', '#ff9900', '#3366cc', '#990099', '#109618', '#dc3912', '#ff9900'],
                        data: chartData.data
                    }
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: `Graph for UK Energy`,
                        }
                    }
                }}
            />
        </div>
    )
}

export default PieChart