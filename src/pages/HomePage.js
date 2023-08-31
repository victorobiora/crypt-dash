import HomeComponent from "../components/home/HomeComponent";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { dashActions } from "../store/cryptStore";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const [isDataBack, setIsDataBack] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.dashBoardDetails);

  useEffect(() => {
    const getCoinsData = async () => {
      const pickedCoinsArray = formData.pickedCoins;
      console.log(pickedCoinsArray);
      //Here, i get the data for picked coins including symbol name and chart data
      //i then push it to my store to be used by chart.js
      try {
        const newFavCoinsArray = await Promise.all(
          pickedCoinsArray.map(async (el) => {
            const itemDataCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el}`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const getItemData = await itemDataCall.json();

            const chartDataCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el}/market_chart?vs_currency=usd&days=7&interval=daily`
            );

            const getChartData = await chartDataCall.json();

            return {
              name: el.charAt(0).toUpperCase() + el.slice(1),
              symbol: getItemData.symbol.toUpperCase(),
              image: getItemData.image,
              price: getItemData.market_data.current_price.usd,
              percentageDifference: getItemData.market_data.price_change_percentage_24h,
              chartData: getChartData.prices,
              everything: getItemData,
            };
          })
        );

        const getLiveChartsData = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
        );
        const response = await getLiveChartsData.json();
        console.log(response);

        const finalLiveChartData = await Promise.all(
          response.map(async (el) => {
            const liveChartResponseCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el.id}/market_chart?vs_currency=usd&days=7&interval=daily`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const responseB = await liveChartResponseCall.json();

            return {
              name: el.id,
              symbol: el.symbol,
              ...responseB,
            };
          })
        );
        //Then update the store with both the favorite coins and live chart coins for chartJs to use the datapoints
        dispatch(
          dashActions.addRequestedCoins({
            newFavCoinsArray,
            finalLiveChartData,
          })
        );
      } catch (err) {
        console.log(err);
      }
      //remove loading state
      setIsDataBack(true);
    };

    getCoinsData();
  }, [formData, dispatch]);

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
