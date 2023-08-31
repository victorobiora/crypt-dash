import classes from "./LoginComponent.module.css";
import { useNavigate } from "react-router-dom";
import * as QuestionsComponents from "./QuestionsComponent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dashActions } from "../../store/cryptStore";

const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [caseNumber, setCaseNumber] = useState(0);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    pickedCoins: [],
    monthlyIncome: 0,
    incomeTarget: 0,
    expenseTarget: 0
  });

  const increaseCaseNumber = (event) => {
    event.preventDefault();
  
    if (isFormComplete) {
      dispatch(dashActions.addToDashBoard(FormData))
      navigate('/home')
    }

    if (caseNumber === 0) {
      if (FormData.name === "" || FormData.name.length <= 1) {
        return alert("Please enter your name");
      } else {
        setCaseNumber((prevState) => {
          return prevState + 1;
        });
      }
    } else if (caseNumber === 1) {
      if (FormData.pickedCoins.length !== 2) {
        return alert("Please choose two coins");
      } else {
        setCaseNumber((prevState) => {
          return prevState + 1;
        });
      }
    } else if (caseNumber === 2) {
      if (FormData.monthlyIncome <= 0 || FormData.monthlyIncome === undefined) {
        return alert("Please enter your income");
      } else {
        setCaseNumber((prevState) => {
          return prevState + 1;
        });
      }
    } else if (caseNumber === 3) {
      if (FormData.monthlyIncome > FormData.incomeTarget || FormData.incomeTarget === undefined) {
        return alert("Your income goal has to be higher than current income");
      } else {
        setCaseNumber((prevState) => {
          return prevState + 1;
        });
      }
    }else if(caseNumber === 4){
      if (FormData.expenseTarget <= 0) {
        return alert("Please enter how much you've spent this month");
      } else {
        setCaseNumber((prevState) => {
          return prevState + 1;
        });
      }
    }else if(caseNumber === 5){
      if (FormData.monthlyExpense <= 0) {
        return alert("Please enter an expense target");
      } else {
        setCaseNumber((prevState) => {
          return prevState + 1;
        });
        setIsFormComplete(true);
      }
    }

    if (caseNumber < 5) {
      setIsFormComplete(false);
    }
  };

  const decreaseCaseNumber = (event) => {
    event.preventDefault();

    setIsFormComplete(false);
    setCaseNumber((prevState) => {
      return prevState - 1;
    });
  };

  const returnFormHandler = (event) => {
    switch (caseNumber) {
      case 0:
        return (
          <QuestionsComponents.GetName
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <QuestionsComponents.GetFavCoins
            setFormData={setFormData}
          />
        );

      case 2:
        return (
          <QuestionsComponents.GetIncome
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <QuestionsComponents.GetIncomeGoals
            setFormData={setFormData}
          />
        );
        case 4: 
        return (
          <QuestionsComponents.GetExpense
            setFormData={setFormData}
          />
        );
      case 5:
        return (
          <QuestionsComponents.GetExpenseGoals
            setFormData={setFormData}
          />
        );
      default:
        return;
    }
  };


  return (
    <section className={`${classes.logInContainer} new_Page`}>
      <div className={classes.introText}>
        <h1>Welcome to Crypt Dash</h1>
        <h4>
          Before we head to the dashboard, Please answer some questions for us
        </h4>
      </div>
      <form>
        {returnFormHandler()}
        <button
          onClick={decreaseCaseNumber}
          disabled={caseNumber === 0 ? true : false}
        >
          <h4> Previous</h4>
        </button>
        <button onClick={increaseCaseNumber}>
          <h4>{isFormComplete ? "Go to DashBoard!" : "Next"}</h4>
        </button>
      </form>
    </section>
  );
};

export default LoginComponent;
