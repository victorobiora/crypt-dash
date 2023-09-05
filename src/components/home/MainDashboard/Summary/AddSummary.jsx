import classes from "./AddSummary.module.css";

const AddSummary = ({ setForm }) => {
  const addTransferHandler = (event) => {
    event.preventDefault();
    setForm();
  };

  const removeFormHandler = (event) => {
    event.preventDefault();
    setForm();
  };

  return (
    <section className={classes.container}>
      <div className={classes.backdrop}></div>
      <form>
        <select className={classes.selectTransaction} name="transfer">
          <option value="Transfer In">Credit</option>
          <option value="Transfer Out">Debit</option>
        </select>
        <div className={classes.question}>
          <label for="amount">Input amount</label>
          <input id="amount" type="number" />
        </div>
        <div className={classes.question}>
          <label for="detail">What was it for?</label>
          <input id="detail" type="text" />
        </div>
        <div className={classes.buttonsDiv}>
          <button className={classes.addButton} onClick={addTransferHandler}>
            Add
          </button>
          <button className={classes.cancelButton} onClick={removeFormHandler}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddSummary;
