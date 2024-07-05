import HomeComponent from "../components/home/HomeComponent";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { dashActions } from "../store/cryptStore";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigation } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigation();
  const [isDataBack, setIsDataBack] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.generalDashBoard.dashBoardDetails
  );
const favCoins =  useSelector(
  (state) => state.generalDashBoard.favCoins
);

  useEffect(() => {
    const getCoinsData = async () => {
      const pickedCoinsArray = ["bitcoin", "ethereum"];

      //Here, i get the data for picked coins including symbol name and chart data
      //i then push it to my store to be used by chart.js

      try {
        const newFavCoinsArray = await Promise.all(
          pickedCoinsArray.map(async (el) => {
            const itemDataCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el}?x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  'x-cg-demo-api-key': 'CG-2Q1UXgaKK7h6EJRVoyqhT7kk'
                },
              }
            );

            const getItemData = await itemDataCall.json();
            console.log(getItemData)

            const chartDataCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el}/market_chart?vs_currency=usd&days=7&interval=daily&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const getChartData = await chartDataCall.json();

            return {
              name: el.charAt(0).toUpperCase() + el.slice(1),
              symbol: getItemData.symbol.toUpperCase(),
              image: getItemData.image,
              price: getItemData.market_data.current_price.usd,
              percentageDifference:
                getItemData.market_data.price_change_percentage_24h,
              chartData: getChartData.prices,
              everything: getItemData,
            };
          })
        );

        console.log(newFavCoinsArray);

        const getLiveChartsData = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const response = await getLiveChartsData.json();
        console.log(response);

        const finalLiveChartData = await Promise.all(
          response.map(async (el) => {
            const liveChartResponseCall = await fetch(
              `https://api.coingecko.com/api/v3/coins/${el.id}/market_chart?vs_currency=usd&days=7&interval=daily&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`,

              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const responseB = await liveChartResponseCall.json();
            console.log(responseB);

            return {
              name: el.name,
              id: el.id,
              symbol: el.symbol,
              image: el.image,
              price: el.current_price,
              ...responseB,
            };
          })
        );
        console.log(finalLiveChartData);
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

    if(favCoins.length > 0) {
        //remove loading state
        setIsDataBack(true);
      return;
    }
    getCoinsData();
  }, [favCoins, formData, dispatch]);

  return (
    <Fragment>
      {!isDataBack || navigation.state === "loading" ? (
        <section className="spinner">
          <div className="spin_container">
            <TailSpin
              color="#0047AB"
              ariaLabel="tail-spin-loading"
              radius="1"
              visible={true}
            />
          </div>

          <div className="please-wait-text">
            Please hold on while we get your data...
          </div>
        </section>
      ) : (
        <HomeComponent />
      )}
    </Fragment>
  );
};

export default HomePage;
