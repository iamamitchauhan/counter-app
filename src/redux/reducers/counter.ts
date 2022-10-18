import { Action } from "@reduxjs/toolkit";
import { decrement, increment, step } from "../actions/counter";

export interface CounterState {
  count: number;
  step: number;
}

/**
 * Initial State of counter reducer
 */
const initState: CounterState = {
  count: 0,
  step: 1,
};

/**
 *
 * @param state Initial State for counter reducer
 * @param action Action for counter reducer
 * @returns latest state for reducer
 */
const counter = (state = initState, action: Action) => {
  if (increment.match(action)) {
    const newCount = state.count + state.step;
    if (newCount <= 20) {
      return { ...state, count: state.count + state.step };
    }
  } else if (decrement.match(action)) {
    return { ...state, count: state.count - state.step };
  } else if (step.match(action)) {
    return { ...state, step: action.payload };
  } else {
    return state;
  }
};

export default counter;
