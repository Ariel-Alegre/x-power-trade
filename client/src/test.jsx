import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TradingChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: "spline",
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: "Wind speed during a day",
        align: "left",
      },
      subtitle: {
        text: "15th & 16th of April, 2020 at two locations in Vik i Sogn, Norway",
        align: "left",
      },
      xAxis: {
        type: "datetime",
        labels: {
          overflow: "justify",
        },
      },
      yAxis: {
        title: {
          text: "Wind speed (m/s)",
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [
          // Plot bands here
        ],
      },
      tooltip: {
        valueSuffix: " m/s",
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5,
            },
          },
          marker: {
            enabled: false,
          },
          pointInterval: 8000, // one hour
          pointStart: Date.UTC(2020, 3, 15, 0, 0, 0),
        },
      },
      series: [
        {
          name: "Hestavollane",
          data: [
            // Data for series 1 here
          ],
        },
        {
          name: "Vik",
          data: [
            // Data for series 2 here
          ],
        },
      ],
      navigation: {
        menuItemStyle: {
          fontSize: "10px",
        },
      },
    };

    Highcharts.chart("container", options);
  }, []);

  return <div id="container" />;
};

export default TradingChart;
