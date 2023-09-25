import classes from "./ChartsComponent.module.css";
import ChartItem from "./ChartItem";
import { svgObject } from "../../svg";
import { Link } from "react-router-dom";
import { chartActions } from "../../store/cryptStore";
import { useDispatch, useSelector } from "react-redux";

const ChartsComponent = ({ chartsArrray }) => {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.chartState.selectedIndex);

  const previousPageHandler = (event) => {
    dispatch(chartActions.updateSelectedPageData("subtract"));
  };

  const nextPageHandler = (event) => {
    dispatch(chartActions.updateSelectedPageData("add"));
  };
  console.log(chartsArrray);
  return (
    <section className={classes.container}>
      <div className={classes.homeHeading}>
        <div className={classes.homeSvg}>{svgObject.homeLink}</div>
        <div>
          {" "}
          <h1>Crypt Dash</h1>{" "}
        </div>
        <Link to="/home">Home</Link>
      </div>
      <main className={classes.mainChart}>
        <ul className={classes.chartItemHeading1}>
          <li className={classes.chartNumber}>
            <h4>#</h4>
          </li>
          <li className={classes.chartCoin}>
            <h4>Coin</h4>
          </li>
          <li>
            <h4>Price</h4>
          </li>
          <li>
            <h4>24h</h4>
          </li>
          <li className={classes.phoneScreenHide}>
            <h4>All time high</h4>
          </li>
          <li className={classes.phoneScreenHide}>
            <h4>Market cap</h4>
          </li>
        </ul>
        {chartsArrray.map((chartsArrrayData) => (
          <ChartItem
            key={chartsArrrayData.ath}
            item={chartsArrrayData}
            color={chartsArrrayData.price_change_percentage_24h < 0 ? "red" : "rgba(43, 187, 43, 1)"}
          />
        ))}
      </main>
      <main className={classes.paginationSection}>
        <div className={classes.currentPage}>
          <h2>Page {pageNumber + 1}</h2>
        </div>
        <div className={classes.paginationButtons}>
          {pageNumber > 0 && (
            <button onClick={previousPageHandler}> Previous Page</button>
          )}
          {pageNumber < 4 && (
            <button onClick={nextPageHandler}> Next Page</button>
          )}
        </div>
      </main>
    </section>
  );
};

export default ChartsComponent;
