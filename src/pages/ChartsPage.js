import { useLoaderData } from "react-router-dom";
import ChartsComponent from "../components/allcharts/ChartsComponent";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chartActions } from "../store/cryptStore";
import NightandDayComponent from "../components/general/NightandDayComponent";

const ChartsPage = () => {
  const selectedPage = useSelector(
    (state) => state.chartState.selectedPageData
  );
  const genCharts = useSelector(
    (state) => state.chartState.genCharts
  );
  const dispatch = useDispatch();
  const data = useLoaderData();
  const [showChart, setShowChart] = useState(true);
  const navigate = useNavigate();

  console.log(genCharts)

  useEffect(() => {
    if (data.errorMessage) {
      navigate("/");
    } else {
      dispatch(chartActions.addTotalCharts(data));
      setShowChart(true);
    }
  }, [data.errorMessage, navigate, data, dispatch]);

  return (
    <Fragment>
      <NightandDayComponent />
      {showChart && <ChartsComponent chartsArrray={selectedPage} />}
    </Fragment>
  );
};

export default ChartsPage;

export const ChartsLoader = async () => {
  try {
    const chartsDataCall = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await chartsDataCall.json();

    return response;
  } catch (err) {
    return {
      errorMessage: "There was an error",
    };
  }
};

/*
{
   headers: {
     "Content-Type": "application/json",
   },
 }*/
