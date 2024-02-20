import PieCard from "../components/PieCard";
import { useProduct } from "../hooks/use-product";

export default function PieChart() {
  const { averageRatingArray, categoryName } = useProduct();

  console.log("categoryName ==> ", categoryName);

  const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,
    // series: [44, 55, 13, 43, 22],
    series: averageRatingArray,
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
      colors: [
        "#020617",
        "#ff8f00",
        "#00897b",
        "#1e88e5",
        "#d81b60",
        "#e142fc",
      ],
      legend: {
        show: false,
      },
    },
  };

  return (
    <>
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
    </>
  );
}
