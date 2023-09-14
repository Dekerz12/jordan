import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function MainLayout() {
  return (
    <div className="dark:bg-gray-900 grid grid-rows-[1fr_auto] sm:grid-cols-[auto_1fr] h-full relative overflow-hidden">
      <Navigation />
      <div className="relative order-1 overflow-scroll overflow-x-hidden prose pt-36 sm:order-2 dark:prose-invert max-w-none prose-stone lg:prose-sm dark:bg-gray-900 prose-headings:font-palanquin">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
