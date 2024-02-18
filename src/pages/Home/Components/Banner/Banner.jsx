import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-row bg-yellow-500 gap-10 p-5 justify-between items-center font-kadwa">
      {/* BANNER LEFT */}
      <div className="w-7/12 ">
        <h1 className="text-8xl font-extrabold md:max-w-sm">Foods & Verity</h1>
        <p className="text-xl font-bold text-black mt-2">
          These Food is organic product. We are whole sale all kind of verity
          product in Bangladesh
        </p>
        <button className="bg-red-500  rounded-md py-3 px-20 drop-shadow-2xl  font-semibold cursor-pointer mt-5 text-white text-xl">
          View More
        </button>
      </div>
      {/* BANNER RIGHT */}
      <div className="w-5/12 ">
        <img src="/images/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
