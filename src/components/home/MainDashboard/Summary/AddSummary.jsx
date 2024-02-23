import classes from "./AddSummary.module.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashActions } from "../../../../store/cryptStore";

const AddSummary = ({ setForm }) => {
  const [isFormCorrect, setIsFormCorrect] = useState(null);
  const dispatch = useDispatch();
  const modeIsDay = useSelector((state) => state.mode.modeIsDay);

  const amountRef = useRef();
  const selectRef = useRef();
  const textRef = useRef();

  const addTransferHandler = (event) => {
    event.preventDefault();
    if (
      amountRef.current.value.length > 0 &&
      textRef.current.value.length > 0
    ) {
      const currentDateTime = new Date();

      const formattedDate = currentDateTime.toISOString().slice(0, 10);
      const formattedTime = currentDateTime.toTimeString().slice(0, 8);

      dispatch(
        dashActions.addToTransferList({
          mode: selectRef.current.value,
          date: formattedDate,
          time: formattedTime,
          amount: parseInt(amountRef.current.value),
          id: Math.floor(Math.random() * 200000000),
          detail: textRef.current.value,
        })
      );
      setIsFormCorrect(true);
      setForm();
    } else {
      setIsFormCorrect(false);
    }
  };

  const removeFormHandler = (event) => {
    event.preventDefault();
    setForm();
  };

  return (
    <section className={classes.container}>
      <div className={classes.backdrop} onClick={removeFormHandler}></div>
      <form
        style={{
          color: modeIsDay ? "" : "black",
        }}
      >
        {isFormCorrect === false && (
          <div className={classes.errorText}>
            Please answer all questions...
          </div>
        )}
        <select
          className={classes.selectTransaction}
          name="transfer"
          ref={selectRef}
        >
          <option value="Transfer In">Credit</option>
          <option value="Transfer Out">Debit</option>
        </select>
        <div className={classes.question}>
          <label htmlFor="amount">Input amount</label>
          <input id="amount" type="number" ref={amountRef} />
        </div>
        <div className={classes.question}>
          <label htmlFor="detail">What was it for?</label>
          <input id="detail" type="text" ref={textRef} />
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
