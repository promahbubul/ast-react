// eslint-disable-next-line react/prop-types
const Item = ({ img, title }) => {
  return (
    <div className="flex flex-row items-center gap-0.5 md:gap-1">
      <img src={img} alt="" className="w-5 md:w-auto" />
      <p className="text-xs md:text-base font-bold text-black">{title}</p>
    </div>
  );
};

export default Item;
