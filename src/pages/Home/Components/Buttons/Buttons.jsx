import { Link } from "react-router-dom";
import Button from "../../../../shared/ui/Button/Button";

const Buttons = () => {
  return (
    <div className="flex flex-row gap-[2px] font-kadwa m-2 md:m-5 shadow-md shadow-yellow-500">
      <Link
        to={"/contact-us"}
        className="w-full hover:shadow-xl  hover:duration-300"
      >
        <Button
          text={"Contact us"}
          className={
            "py-3 bg-red-500 w-full  text-white text-base lg:text-2xl font-extrabold rounded-l-md"
          }
        />
      </Link>
      <Link
        to={"/products"}
        className="w-full hover:shadow-xl  hover:duration-300"
      >
        <Button
          text={"Products"}
          className={
            "py-3 bg-red-500 w-full text-white text-base lg:text-2xl font-extrabold"
          }
        />
      </Link>
      <Link to={"/gallery"} className="w-full hover:shadow-xl duration-300">
        <Button
          text={"Gallery"}
          className={
            "py-3 bg-red-500 w-full  text-white text-base lg:text-2xl font-extrabold rounded-r-md"
          }
        />
      </Link>
    </div>
  );
};

export default Buttons;
