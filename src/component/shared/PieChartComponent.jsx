'use client'
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const PieChartComponent = ({ totalRejected, totalApproved, totalPendings }) => {
    console.log(totalRejected);
    console.log(totalPendings);
    console.log(totalApproved);


    const data = [
        { name: 'Pending', value: totalPendings.length, fill: '#0088FE' },
        { name: 'Approved', value: totalApproved.length, fill: '#00C49F' },
        { name: 'Rejected', value: totalRejected.length, fill: '#FFBB28' },
    ];


    return (
        <div>
            <PieChart className='mx-auto' style={{ width: '60%', maxWidth: '300px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="60%"
                    outerRadius="80%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true} />
                
                <Legend></Legend>
                <Tooltip></Tooltip>
               
            </PieChart>
        </div>
    );
};

export default PieChartComponent;

