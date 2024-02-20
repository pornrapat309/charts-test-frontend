import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LineChart /> },
      { path: "/bar", element: <BarChart /> },
      { path: "/pie", element: <PieChart /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
