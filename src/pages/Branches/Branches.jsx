import { useLoaderData } from "react-router-dom";
import SinglePage from "../../shared/SinglePage/SinglePage";
import Pera from "../../shared/ui/Pera/Pera";
import { useEffect, useState } from "react";

const Branches = () => {
  const [branches1, setBranches1] = useState([]);
  const [branches2, setBranches2] = useState([]);

  useEffect(() => {
    fetch("/branches.json")
      .then((res) => res.json())
      .then((data) => {
        setBranches1(data.branches1);
        setBranches2(data.branches2);
      });
  }, []);

  console.log(branches1);
  return (
    <SinglePage
      pageTitle={"Branches of A.S.T Bangladesh in all Districts of Bangladesh"}
    >
      <div className="flex flex-row justify-around gap-5 p-5 mb-20">
        {/* BRANCHES SIDE 1 */}
        <div className="flex flex-col ">
          {branches1.map((branche) => (
            <div key={branche.id} className="flex flex-row items-center gap-2">
              <Pera>{branche.id}.</Pera>
              <Pera>{branche.name}</Pera>
            </div>
          ))}
        </div>
        {/* BRANCHES SIDE 2 */}
        <div className="flex flex-col ">
          {branches2.map((branche) => (
            <div key={branche.id} className="flex flex-row items-center gap-2">
              <Pera>{branche.id}.</Pera>
              <Pera>{branche.name}</Pera>
            </div>
          ))}
        </div>
      </div>
    </SinglePage>
  );
};

export default Branches;
