import HomeComponent from "../components/home/HomeComponent";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { dashActions } from "../store/cryptStore";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const [isDataBack, setIsDataBack] = useState(false);
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.dashBoardDetails);
  const favCoins = useSelector((state) => state.favCoins);

  useEffect(() => {
    const getCoinsData = async () => {
      const pickedCoinsArray = formData.pickedCoins;
      console.log(pickedCoinsArray);
      //Here, i get the data for picked coins including symbol name and chart data
      //i then push it to my store to be used by chart.js
      const newFavCoinsArray = await Promise.all(
        pickedCoinsArray.map(async (el) => {
          try {
            const symbolCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el}`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const getSymbol = await symbolCall.json();

            const chartDataCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el}/market_chart?vs_currency=usd&days=7&interval=daily`
            );

            const getChartData = await chartDataCall.json();

            return {
              name: el,
              symbol: getSymbol.symbol.toUpperCase(),
              chartData: getChartData.prices,
            };
          } catch (err) {
            console.log(err);
          }
        })
      );
     dispatch(dashActions.addFavCoins(newFavCoinsArray))
     setIsDataBack(true)
    };

    getCoinsData();
  }, [formData]);

  console.log(favCoins)
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
