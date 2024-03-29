import { useEffect } from "react";
import classes from "./QuestionsComponent.module.css";
import { useState } from "react";

export const GetName = (props) => {
  return (
    <div className={classes.getContainer}>
      <h3>What is your name?</h3>
      <input
        type="text"
        name="name"
        className={classes.getNameInput}
        required
        onChange={(event) => {
          props.setFormData({ name: event.target.value });
        }}
      />
    </div>
  );
};

export const GetImage = ({ setFormData }) => {
  const [image, setImage] = useState();
  console.log(image);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevState) => {
          return {
            ...prevState,
            profilePic: reader.result,
          };
        });
      };

      reader.readAsDataURL(image);
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          profilePic:
            "https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg",
        };
      });
    }
  }, [image, setFormData]);

  return (
    <div className={classes.getContainer}>
      <h3>Lastly, Please choose a profile picture</h3>
      <input
        className={classes.get_image}
        type="file"
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files[0];
          if (file && file.type.substring(0, 5) === "image") {
            setImage(file);
          }
        }}
      />
    </div>
  );
};

export const GetFavCoins = ({ setFormData }) => {
  const [checkedCoins, setCheckedCoins] = useState([]);

  useEffect(() => {
    setFormData((prevState) => {
      return {
        ...prevState,
        pickedCoins: checkedCoins,
      };
    });
  }, [checkedCoins, setFormData]);

  const updateCheckedHandler = (event) => {
    if (event.target.checked && checkedCoins.length !== 2) {
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

  return (
    <div className={classes.getFavCoins}>
      <h2> Please select two coins you love below </h2>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="bitcoin"
          onChange={updateCheckedHandler}
        />
        Bitcoin
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="ethereum"
          onChange={updateCheckedHandler}
        />
        Ethereum
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="tether"
          onChange={updateCheckedHandler}
        />
        Tether USD
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="ripple"
          onChange={updateCheckedHandler}
        />
        Ripple
      </label>
      <label>
        <input
          type="checkbox"
          name="favCoins"
          value="solana"
          onChange={updateCheckedHandler}
        />
        Solana
      </label>
    </div>
  );
};

export const GetIncome = (props) => {
  return (
    <div className={classes.getContainer}>
      <h3>How much did you make this month?</h3>
      <input
        type="number"
        name="income"
        required
        onChange={(event) => {
          props.setFormData((prevState) => {
            return {
              ...prevState,
              monthlyIncome: parseInt(event.target.value),
            };
          });
        }}
      />
    </div>
  );
};

export const GetIncomeGoals = (props) => {
  return (
    <div className={classes.getContainer}>
      <h3>How much do you wish to make per month?</h3>
      <input
        type="number"
        name="income"
        required
        onChange={(event) => {
          props.setFormData((prevState) => {
            return {
              ...prevState,
              incomeTarget: parseInt(event.target.value),
            };
          });
        }}
      />
    </div>
  );
};

export const GetExpense = (props) => {
  return (
    <div className={classes.getContainer}>
      <h3>How much have you spent this month?</h3>
      <input
        type="number"
        name="expense"
        required
        onChange={(event) => {
          props.setFormData((prevState) => {
            return {
              ...prevState,
              monthlyExpense: parseInt(event.target.value),
            };
          });
        }}
      />
    </div>
  );
};

export const GetExpenseGoals = (props) => {
  return (
    <div className={classes.getContainer}>
      <h3>How much do you intend to spend this month?</h3>
      <input
        type="number"
        name="income"
        required
        onChange={(event) => {
          props.setFormData((prevState) => {
            return {
              ...prevState,
              expenseTarget: parseInt(event.target.value),
            };
          });
        }}
      />
    </div>
  );
};
