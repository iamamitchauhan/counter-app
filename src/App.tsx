import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, step } from "./redux/actions/counter";
import { CounterState } from "./redux/reducers/counter";
import { RootState } from "./redux/store";
import { STEPS_OPTIONS } from "./shared/constants";

/**
 * Counter Application for Increment and Decrement
 */
function App() {
  const dispatch = useDispatch();
  const [timestamp, setTimestamp] = useState(0);
  const [alert, setAlert] = useState("");
  const { count, step: stepValue }: CounterState = useSelector((state: RootState) => state.counter);

  /**
   * change the step value
   * @param event event object
   */
  const changeStepHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    dispatch(step(+event.currentTarget.value));
  };

  console.info("count =>", count);

  useEffect(() => {
    if (count === 20) {
      setAlert("Counter reaches 20");
    } else {
      setAlert("");
    }
  }, [count]);

  useEffect(() => setTimestamp(new Date().getTime()), []);

  return (
    <div className="container">
      <div className="box">
        <div className="row">
          <span data-testid="timestamp">Component did Mount at : </span>
          {timestamp}
        </div>

        <div className="row mt-6">
          <div>
            <select className="stepper" value={stepValue} onChange={changeStepHandler}>
              {STEPS_OPTIONS.map(({ value, label }) => (
                <option key={label} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button data-testid="decrement" onClick={() => dispatch(decrement())}>
              -
            </button>
            <span data-testid="counter">{count}</span>
            <button data-testid="increment" onClick={() => dispatch(increment())}>
              +
            </button>
          </div>
        </div>
        {alert && (
          <div className="row">
            <p className="error">{alert}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
