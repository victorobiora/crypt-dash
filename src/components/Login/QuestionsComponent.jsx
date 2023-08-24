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
/*
  const updateCheckedHandler = (event) => {
    const checker = checkedCoins.findIndex((el) => el === event.target.value);
    if (!event.target.checked && checkedCoins.length > 0) {
        setCheckedCoins(prevState => {
            return prevState.filter(el => el !== event.target.value)
        })
    }
  };*/
  return (
    <div className={classes.getFavCoins}>
      <h2> Please select two coins you love below </h2>
      <label>
        <input type="checkbox" name="favCoins" value="BTC" /> Bitcoin
      </label>
      <label>
        <input type="checkbox" name="favCoins" value="ETH" /> Ethereum
      </label>
      <label>
        <input type="checkbox" name="favCoins" value="USDT" /> Tether USD
      </label>
      <label>
        <input type="checkbox" name="favCoins" value="XRP" /> Ripple
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="SOL"
          onChange={''}
        />{" "}
        Solana
      </label>
    </div>
  );
};

export const GetIncome = (props) => {};

export const GetIncomeGoals = (props) => {};

export const GetExpenseGoals = (props) => {};
