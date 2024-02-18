import { Link } from "react-router-dom";
import Button from "../../../../shared/ui/Button/Button";

const Buttons = () => {
  return (
    <div className="flex flex-row gap-[2px] font-kadwa m-5 shadow-md shadow-yellow-500">
      <Link to={"/contact"} className="w-full">
        <Button
          text={"Contact us"}
          className={
            "py-3 bg-red-500 w-full  text-white text-2xl font-extrabold rounded-l-md"
          }
        />
      </Link>
      <Link to={"/carrer"} className="w-full">
        <Button
          text={"Contact us"}
          className={
            "py-3 bg-red-500 w-full text-white text-2xl font-extrabold"
          }
        />
      </Link>
      <Link to={"/gallery"} className="w-full">
        <Button
          text={"Contact us"}
          className={
            "py-3 bg-red-500 w-full  text-white text-2xl font-extrabold rounded-r-md"
          }
        />
      </Link>
    </div>
  );
};

export default Buttons;
