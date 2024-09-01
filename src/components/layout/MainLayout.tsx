import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollToTop smooth className="flex justify-center items-center" />
      <Footer />
    </div>
  );
};

export default MainLayout;
