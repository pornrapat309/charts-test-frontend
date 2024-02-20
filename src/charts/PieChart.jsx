import PieCard from "../components/PieCard";
import { useProduct } from "../hooks/use-product";

export default function PieChart() {
  const { categoryName, averageRatingArray } = useProduct();

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
    <div className="grid grid-cols-3 gap-4">
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
      <PieCard chartConfig={chartConfig} />
    </div>
  );
}
