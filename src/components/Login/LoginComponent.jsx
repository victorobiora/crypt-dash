import classes from './LoginComponent.module.css'
import * as QuestionsComponents from './QuestionsComponent'

const LoginComponent = (props) => {

  return (
    <section className="new_Page">
      <div className={classes.introText}>
        <h1>Welcome to Crypt Dash</h1>
        <h4>
          Before we head to the dashboard, Please answer some questions for us
        </h4>
      </div>
      <form>
        {<QuestionsComponents.GetIncome />}
        <button>Next</button>
      </form>
    </section>
  );
};

export default LoginComponent
