import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
    const values = dataPoints.map((dataPoint) => dataPoint.value);
    const maximun = Math.max(...values);

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maximun}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
