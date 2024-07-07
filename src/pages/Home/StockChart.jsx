import { fetchMarketChart } from "@/Store/Coin/Action";
import { Button } from "@/components/ui/button";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series ",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series ",
    lable: "1 Month",
    value: 30,
  },
  {
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Yearly Time Series ",
    lable: "1 year",
    value: 365,
  },
];
const StockChart = ({ coinId }) => {
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);
  const [activieLabel, setActiveLabel] = useState(timeSeries[0]);
  const searies = [
    {
      data: coin.marketChart.data,
    },
  ];

  const options = {
    chart: {
      id: "area-datatime",
      type: "area",
      height: 450,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      size: 6,
      strokeColor: "#fff",
      style: "hollow ",
      strokeWidth: 1,
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDasharray: 4,
      show: true,
    },
  };

  const handleActiveLabel = (value) => {
    setActiveLabel(value);
  };
  useEffect(() => {
    dispatch(
      fetchMarketChart({
        coinId,
        days: activieLabel.value,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, [dispatch, coinId, activieLabel]);
  return (
    <div id="chart-timelines">
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activieLabel.lable == item.lable ? "" : "outline"}
            onClick={() => handleActiveLabel(item)}
            key={item.lable}
          >
            {item.lable}
          </Button>
        ))}
      </div>
      <ReactApexChart
        options={options}
        series={searies}
        height={450}
        type="area"
      />
    </div>
  );
};

export default StockChart;
