const Events = () => {
  return (
    <div className=" w-full relative flex flex-col md:flex-row justify-between md:gap-20 ">
      <div
        style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
        className="bg-red-500 h-full w-full absolute  -z-10"
      ></div>
      <img src="/images/bani.png" alt="" className="z-20 w-full" />
      <div className="text-center w-full -mt-2 p-3 md:p-0 md:mt-32">
        <h2 className="text-3xl text-black  md:text-white font-kadwa  mb-5 ">
          Events
        </h2>
        <img src="/images/events.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Events;
