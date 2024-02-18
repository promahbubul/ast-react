const Card = ({ title, img, description }) => {
  return (
    <div className="bg-white w-full shadow-yellow-500  shadow-lg flex flex-col items-center gap-5 p-5 rounded-md text-center mx-auto">
      <img src={img} alt="" className=" mx-auto" />
      <h2 className="text-xl uppercase text-center font-semibold text-black">
        {title}
      </h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
