import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-red-500 font-kadwa gap-5 md:gap-0  flex flex-row justify-between items-center mx-auto p-2 md:p-5">
      {/* LEFT */}
      <Link
        to={"/"}
        className="w-3/12 md:w-4/12  flex flex-col justify-between"
      >
        <img src="/images/logo2.png" alt="" className="w-full md:w-24" />
      </Link>
      {/* RIGHT */}
      <div className="w-9/12 md:w-8/12  flex flex-col items-end gap-3">
        {/* RIGHT TOP */}
        <div className="flex flex-row gap-3 md:gap-5 text-xl md:text-2xl">
          <div className="hidden md:flex flex-col items-center gap-1 cursor-pointer">
            <FaShoppingCart />
            <span className="text-sm text-white text-center font-semibold">
              Cart
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <FaHeart />
            <span className="text-xs md:text-sm text-white text-center font-semibold">
              Wishlist
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <FaUserCircle />
            <span className="text-xs md:text-sm text-white text-center font-semibold">
              Profile
            </span>
          </div>
        </div>
        {/* RIGHT BOTTOM */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-10">
          <div className="text-white text-xs md:text-sm flex flex-row gap-5 font-semibold">
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
            <div className="group">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2  border-b-white flex flex-row items-center gap-1"
                    : "duration-300 border-b-2 hover:border-b-white border-b-transparent flex flex-row items-center gap-1"
                }
              >
                About <IoMdArrowDropdown className="text-white" />
              </NavLink>
              <div
                className={`bg-white inset-x-0  mt-0 cursor-pointer p-2 items-start  fixed border group-hover:flex flex-row justify-between hidden gap-5  `}
              >
                <div className="w-6/12 border-2 border-red-500font-kadwa">
                  <p className="font-normal text-lg text-black font-kadwa ">
                    Our Company
                  </p>
                  <p className="font-normal text-lg text-black max-w-xl">
                    <span className="font-extrabold"> A.S.T</span> is the
                    largest food company in Bangladesh. Know our story and who
                    we are.
                  </p>
                </div>
                <div className="w-6/12 font-jura font-normal text-black flex flex-col">
                  <NavLink
                    to={"/inception"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-b-red-500  duration-300 w-max "
                        : "border-b-transparent hover:border-b-red-500 border-b-2  w-max"
                    }
                  >
                    Our Inception
                  </NavLink>
                  <NavLink
                    to={"/mission"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-b-red-500  duration-300 w-max "
                        : "border-b-transparent hover:border-b-red-500 border-b-2  w-max"
                    }
                  >
                    Mission Vision
                  </NavLink>
                  <NavLink
                    to={"/branches"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-b-red-500  duration-300 w-max "
                        : "border-b-transparent hover:border-b-red-500 border-b-2  w-max"
                    }
                  >
                    Branches
                  </NavLink>
                  <NavLink
                    to={"/contact-us"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-b-red-500  duration-300 w-max "
                        : "border-b-transparent hover:border-b-red-500 border-b-2  w-max"
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>

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
              className="w-full md:w-60 text-base py-1 rounded-md px-2 placeholder:text-center text-center outline-none"
              placeholder="Search Products"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
