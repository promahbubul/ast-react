// eslint-disable-next-line react/prop-types
const Item = ({ img, title }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <img src={img} alt="" className="" />
      <p className="text-base font-bold text-black">{title}</p>
    </div>
  );
};

export default Item;
