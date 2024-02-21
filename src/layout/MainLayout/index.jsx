import { Outlet } from "react-router-dom";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [hideModal, setHideModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideModal(false);
    }, 3000);
  }, []);
  return (
    <div className="container font-kadwa mx-auto">
      <marquee className="fixed bg-gray z-30 text-white text-lg md:text-2xl bottom-0 inset-x-0 py-2 md:py-3 text-center">
        A.S.T Distribution is Bangladesh No 1 Popular Products Supplier for
        Healthy Life & wealthy
      </marquee>
      {/* MODAL */}
      {hideModal && (
        <div className="">
          <div
            onClick={() => setHideModal(false)}
            className="bg-black/50 z-40 fixed inset-x-0 inset-y-0"
          ></div>
          <div className="fixed w-10/12 md:w-4/12 z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <img src="/images/modal.png" alt="" />
            <button
              onClick={() => setHideModal(false)}
              className="w-full bg-white py-2 rounded-b-3xl md:rounded-b-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
