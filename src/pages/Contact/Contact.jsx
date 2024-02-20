import { useRef } from "react";
import SinglePage from "../../shared/SinglePage/SinglePage";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dkp085p", "template_o9230x8", form.current, {
        publicKey: "BlssWX1RCombXcGn5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Successfully Message Send");
          const name = e.target.user_name;
          const email = e.target.user_email;
          const message = e.target.message;
          name.value = "";
          email.value = "";
          message.value = "";
          // name.value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <SinglePage pageTitle={"Contact with A.S.T"}>
      <div className="flex flex-col gap-2 p-5 mb-14 font-medium">
        <p className="font-jura text-2xl">Our Corporate Headquarters -</p>
        <p className="font-jura text-2xl">A.S.T Center</p>
        <p className="font-jura text-2xl">
          A.S.T Bhuiyan Dstribution Taltola, Shampur,
        </p>
        <p className="font-jura text-2xl">Dhaka-1204, Bangladesh.</p>
        <p className="font-jura text-2xl">Phone: +8801909068439 </p>
        <p className="font-jura text-2xl">Phone: +8801901025307</p>
        <p className="font-jura text-2xl">Gmail- salambhuiyan2023@gmail.com</p>
      </div>
      <div className="bg-yellow-500 pt-20 p-5 shadow-md shadow-yellow-500">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-12 max-w-4xl gap-2 mb-10 mx-auto "
        >
          {/* NAME */}
          <div className="flex flex-row  col-span-12">
            <label
              className="w-3/12 text-2xl font-jura font-semibold"
              htmlFor="name"
            >
              Your Full Name:
            </label>
            <input
              type="text"
              className="w-9/12 outline-none p-2 rounded-md shadow-md shadow-gray"
              id="name"
              name="user_name"
            />
          </div>
          {/* EMAIL */}
          <div className="flex flex-row col-span-12">
            <label
              className="w-3/12 text-2xl font-jura font-semibold"
              htmlFor="name"
            >
              Gmail Address:
            </label>
            <input
              type="text"
              className="w-9/12 outline-none p-2 rounded-md shadow-md shadow-gray "
              id="name"
              name="user_email"
            />
          </div>
          <div className="flex flex-row col-span-12">
            <div className="col-span-5 w-3/12"></div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="w-9/12 outline-none p-2 rounded-md shadow-md shadow-gray"
            ></textarea>
          </div>
          <div className="flex flex-row col-span-12">
            <div className="col-span-5 w-3/12"></div>
            <input
              type="Submit"
              value={"Send"}
              className="bg-red-500 rounded-md py-3 px-10 shadow-2xl  text-2xl fontexbor
              font-kadwa hover:bg-red-700 duration-300 hover:shadow-md hover:shadow-gray shadow-gray text-white cursor-pointer"
            />
          </div>
        </form>

        <p className="font-jura text-left text-base font-semibold">
          Or any inquire for website- <br /> https://e-mprove.co.uk/
        </p>
      </div>
    </SinglePage>
  );
};

export default Contact;
