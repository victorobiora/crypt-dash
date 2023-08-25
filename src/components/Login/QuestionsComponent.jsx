import classes from "./QuestionsComponent.module.css";
import { useState } from "react";

export const GetName = (props) => {
  return (
    <div className={classes.getNameContainer}>
      <h2>What is your name?</h2>
      <input type="text" name="name" className={classes.getNameInput} />
    </div>
  );
};

export const GetFavCoins = (props) => {
  const [checkedCoins, setCheckedCoins] = useState([]);

  const updateCheckedHandler = (event) => {
    if (event.target.checked&& checkedCoins.length !== 2) {
      setCheckedCoins((prevState) => {
        return [...prevState, event.target.value];
      });
    } else if (event.target.checked && checkedCoins.length === 2) {
      event.target.checked = false;
    } else {
      setCheckedCoins((prevState) =>
        prevState.filter((el) => el !== event.target.value)
      );
    }
  };

  console.log(checkedCoins);
  return (
    <div className={classes.getFavCoins}>
      <h2> Please select two coins you love below </h2>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="BTC"
          onChange={updateCheckedHandler}
        />{" "}
        Bitcoin
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="ETH"
          onChange={updateCheckedHandler}
        />{" "}
        Ethereum
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="USDT"
          onChange={updateCheckedHandler}
        />{" "}
        Tether USD
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="XRP"
          onChange={updateCheckedHandler}
        />{" "}
        Ripple
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="SOL"
          onChange={updateCheckedHandler}
        />{" "}
        Solana
      </label>
    </div>
  );
};

export const GetIncome = (props) => {};

export const GetIncomeGoals = (props) => {};

export const GetExpenseGoals = (props) => {};
