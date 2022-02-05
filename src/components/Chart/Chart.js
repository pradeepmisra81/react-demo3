import React from "react";

import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
    
    return (
        <div className="chart">
        {props.dataPoints.map(dataPoint => (
        <ChartBar 
        key={Math.random().toString + dataPoint.label}
        value={dataPoint.value} 
        maxValue={totalMax}
        label={dataPoint.label}
        />
        ))}
        </div>
    );
}

export default Chart;