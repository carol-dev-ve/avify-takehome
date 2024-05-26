import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Generationmix } from '../../interfaces/CarbonDataResponse';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Props {
    dataGraph: Generationmix[]
}

interface DataForChart {
    labels: string[],
    data: string[]
}

const PieChart = ({ dataGraph }: Props) => {
    const [dataSummary, setDataSummary] = useState<DataForChart>({})
    useEffect(() => {
        // Extracting labels and data from dataGraph
        const labels = dataGraph.map(item => item.fuel);
        const data = dataGraph.map(item => item.perc);

        // Update chart data state
        setDataSummary({ labels, data });
    }, [dataGraph]);
    return (
        <div className="w-full flex justify-center">
            <Pie
                data={{
                    labels: dataSummary.labels,
                    datasets: [{
                        label: `Graph for UK Energy`,
                        backgroundColor: ['#3366cc', '#990099', '#109618', '#dc3912', '#ff9900', '#3366cc', '#990099', '#109618', '#dc3912', '#ff9900'],
                        data: dataSummary.data
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