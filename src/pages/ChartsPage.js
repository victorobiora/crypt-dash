import { useLoaderData } from "react-router-dom";
import ChartsComponent from "../components/allcharts/ChartsComponent";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

const ChartsPage = () => {
  const data = useLoaderData();
  const [showChart, setShowChart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.errorMessage) {
      console.log("vjgdhjf");
      navigate("/");
    } else {
      setShowChart(true);
    }
  }, [data.errorMessage, navigate]);

  return (
    <Fragment>{showChart && <ChartsComponent chartsArrray={data} />};</Fragment>
  );
};

export default ChartsPage;

export const ChartsLoader = async () => {
  try {
    const chartsDataCall = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
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
