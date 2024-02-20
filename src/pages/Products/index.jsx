import { useEffect, useState } from "react";
import SinglePage from "../../shared/SinglePage/SinglePage";

const Products = () => {
  const [products, setProducts] = useState([1, 2]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);
  return (
    <div>
      <SinglePage pageTitle={"Products"}>
        <div className="grid grid-cols-12 gap-8 p-10">
          {products.map((product) => (
            <div key={product.id} className="col-span-3 cursor-pointer">
              <img src={product.img} alt="" className="mb-2" />
              <div className="flex flex-row text-lg font-semibold gap-3 items-center justify-center">
                <p className="">{product.name}</p>
                <p className="">{product.weight}</p>
              </div>
            </div>
          ))}
        </div>
      </SinglePage>
    </div>
  );
};

export default Products;
