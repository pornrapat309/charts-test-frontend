import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";

const router = createBrowserRouter([
  { path: "/", element: <LineChart /> },
  { path: "/bar", element: <BarChart /> },
  { path: "/pie", element: <PieChart /> },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
