import BarCard from "../components/BarCard";
import { useProduct } from "../hooks/use-product";

export default function BarChart() {
  const { categoryName, averageRatingArray } = useProduct();

  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Rating(average)",
        // data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        data: averageRatingArray,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        // categories: [
        //   "Apr",
        //   "May",
        //   "Jun",
        //   "Jul",
        //   "Aug",
        //   "Sep",
        //   "Oct",
        //   "Nov",
        //   "Dec",
        // ],
        categories: categoryName,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <>
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
      <BarCard chartConfig={chartConfig} />
    </>
  );
}
