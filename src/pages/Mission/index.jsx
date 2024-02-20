import SinglePage from "../../shared/SinglePage/SinglePage";
import Pera from "../../shared/ui/Pera/Pera";

const Mission = () => {
  return (
    <SinglePage pageTitle={"Mission & Vision of A.S.T Bangladesh"}>
      <div className="flex flex-col gap-5 p-5 mb-20">
        <Pera>
          Mission: <br /> At AST Bangladesh, our mission is to revolutionize the
          food distribution industry by providing the highest quality food and
          beverage items to consumers across Bangladesh at competitive prices.
          We are dedicated to reducing the level of price hikes in the country
          while creating employment opportunities and contributing to the vision
          of a digital Bangladesh as envisioned by our Prime Minister, Sheikh
          Hasina. Our mission is to decrease the unemployment rate by expanding
          our operations and empowering individuals through job opportunities,
          thereby fostering economic growth and prosperity.
        </Pera>
        <Pera>
          Vision: <br /> Our vision at AST Bangladesh is to become the leading
          distribution brand in Bangladesh, setting the benchmark for excellence
          in quality, affordability, and innovation. We aspire to be the
          foremost choice for consumers seeking top-tier food products while
          actively working towards the realization of a digital Bangladesh. By
          leveraging technology and embracing innovation, we aim to streamline
          operations, enhance accessibility, and create a seamless experience
          for our customers. Through our efforts, we envision a future where AST
          Bangladesh plays a pivotal role in shaping the food industry
          landscape, driving positive change, and contributing to the
          socio-economic development of the nation.
        </Pera>
      </div>
    </SinglePage>
  );
};

export default Mission;
