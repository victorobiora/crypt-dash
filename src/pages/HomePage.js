import HomeComponent from "../components/home/HomeComponent";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux/es/hooks/useSelector";

const HomePage = () => {
  const [isDataBack, setIsDataBack] = useState(false);
  const formData = useSelector((state) => state.dashBoardDetails);

  useEffect(() => {}, [formData]);

  return (
    <Fragment>
      {!isDataBack && (
        <section className="spinner">
          <TailSpin
            color="#0047AB"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
          <div className="please-wait-text">
            Please hold on while we get your data...
          </div>
        </section>
      )}

      {isDataBack && <HomeComponent />}
    </Fragment>
  );
};

export default HomePage;

export const homePageLoader = () => {
  return null;
};
