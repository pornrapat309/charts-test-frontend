import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <Outlet />
      </div>
    </>
  );
}
