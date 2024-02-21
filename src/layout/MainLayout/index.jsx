import { Outlet } from "react-router-dom";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

const MainLayout = () => {
  return (
    <div className="container font-kadwa mx-auto">
      <marquee className="fixed bg-gray z-10 text-white text-lg md:text-2xl bottom-0 inset-x-0 py-2 md:py-3 text-center">
        A.S.T Distribution is Bangladesh No 1 Popular Products Supplier for
        Healthy Life & wealthy
      </marquee>
      {/* HEADER */}
      <Header />
      {/* CONTENT AREA */}
      <Outlet />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
