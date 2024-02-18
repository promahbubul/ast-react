import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-500 font-kadwa  flex flex-row justify-between items-center mx-auto p-5">
      {/* LEFT */}
      <Link to={"/"} className="w-full  flex flex-col justify-between">
        <img src="/images/logo2.png" alt="" className="w-24" />
      </Link>
      {/* RIGHT */}
      <div className="w-full  flex flex-col items-end gap-3">
        {/* RIGHT TOP */}
        <div className="flex flex-row gap-5 text-2xl">
          <div className="flex flex-col items-center gap-1">
            <FaShoppingCart />
            <span className="text-sm text-white text-center font-semibold">
              Cart
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaHeart />
            <span className="text-sm text-white text-center font-semibold">
              Wishlist
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaUserCircle />
            <span className="text-sm text-white text-center font-semibold">
              Profile
            </span>
          </div>
        </div>
        {/* RIGHT BOTTOM */}
        <div className="flex flex-row items-center gap-10">
          <div className="text-white text-lg flex flex-row gap-5 font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-white "
                  : "duration-300 border-b-2 hover:border-b-white border-b-transparent"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-white "
                  : "duration-300 border-b-2 hover:border-b-white border-b-transparent"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/policy"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-white "
                  : "duration-300 border-b-2 hover:border-b-white border-b-transparent"
              }
            >
              Privacy Policy
            </NavLink>
          </div>
          <div className="relative">
            <IoSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-lg text-yellow-500 font-extrabold cursor-pointer " />
            <input
              type="text"
              className="w-60 text-base py-1 rounded-md px-2 placeholder:text-center text-center outline-none"
              placeholder="Search Products"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
