import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
    let barFillHeight = "0%";

    if (maxValue > 0) {
        //(This makes the code faster in case max value only goes above 0)
        barFillHeight = Math.round((value * 100) / maxValue) + "%"; //Rule of three
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;
