import { Link } from "react-router-dom";
import Item from "./Components/Item/Item";

const Footer = () => {
  return (
    <footer className="bg-silver-100  font-kadwa">
      <div className="bg-yellow-500 py-3 mt-2">
        <h2 className=" leading-tight text-center  text-xl md:text-2xl font-bold">
          Contact Us
        </h2>
      </div>
      {/* FOOTER CONTAINER */}
      <div className="p-2 md:p-5 flex flex-col md:flex-row justify-between">
        {/* FOOTER LEFT */}
        <div className="flex flex-col md:flex-row gap-5 items-start md:items-center w-full">
          <Link to={"/"} className="mx-auto">
            <img src="/images/logo2.png" alt="" className="w-24 h-24" />
          </Link>
          <div className="text-black text-sm md:text-base font-bold flex flex-col gap-2">
            <p className="">Corporate Headquarters: </p>
            <p className="">A.S.T Center</p>
            <p className="">105 Pragati Sarani, Middle Badda,</p>
            <p className="">Dhaka - 1212, Bangladesh.</p>
            <p className="">Phone: +880-2222281792 Ext-345</p>
            <p className="">Fax: +88-02-8837464</p>
            <p className="">© A.S.T-FOODS. 2024</p>
            <p className="">E-mprove Technology</p>
          </div>
        </div>
        {/* FOOTER RIGHT */}
        <div className="w-full h-full">
          <div className=" hidden md:flex flex-row justify-end gap-3 relative">
            <h3 className="text-2xl font-extrabold text-center">
              Scan QR For <br /> Mobile App
            </h3>
            <img
              src="/images/icons/right-arrow.svg"
              alt=""
              className="absolute right-36 top-14"
            />
            <img src="/images/qrcode.png" alt="" className="w-36 h-36" />
          </div>
          <div className="flex flex-row items-center justify-end mt-3 md:mb-0 mb-10 gap-5">
            <Link to={"tel:+8801909068439"}>
              <Item title={"Helpline"} img={"/images/icons/headphone.png"} />
            </Link>
            <Link
              to={"https://maps.app.goo.gl/Zj29H8GSKHWx5yyj8"}
              target="_blank"
            >
              <Item title={"Map"} img={"/images/icons/map.png"} />
            </Link>

            <Link
              target="_blank"
              to="mailto:astbangladesh6@gmail.com"
              className=""
            >
              <Item title={"Gmail"} img={"/images/icons/email.png"} />
            </Link>
            <Link to={"/condition"}>
              <Item title={"T & C"} img={"/images/icons/help.png"} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
