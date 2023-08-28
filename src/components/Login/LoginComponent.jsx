import classes from "./LoginComponent.module.css";
import { useNavigate } from "react-router-dom";
import * as QuestionsComponents from "./QuestionsComponent";
import { useState } from "react";

const LoginComponent = (props) => {
  const navigate = useNavigate();
  const [caseNumber, setCaseNumber] = useState(0);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [FormData, setFormData] = useState({});

  const increaseCaseNumber = (event) => {
    event.preventDefault();

    console.log(caseNumber);
    if (isFormComplete) {
      navigate('/home', { state: FormData})
    }

    if (caseNumber === 4) {
      setIsFormComplete(true);
    } else if (caseNumber < 4) {
      setIsFormComplete(false);
    }
    setCaseNumber((prevState) => {
      return prevState + 1;
    });
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
            FormData={FormData}
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <QuestionsComponents.GetFavCoins
            FormData={FormData}
            setFormData={setFormData}
          />
        );

      case 2:
        return (
          <QuestionsComponents.GetIncome
            FormData={FormData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <QuestionsComponents.GetIncomeGoals
            FormData={FormData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <QuestionsComponents.GetExpenseGoals
            FormData={FormData}
            setFormData={setFormData}
          />
        );
      default:
        return;
    }
  };

  console.log(FormData);

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
