import { Action, AnyAction, Dispatch } from "@reduxjs/toolkit";
import { decrement, increment } from "../actions/counter";

/**
 * Timer middleware for counter
 * @returns
 */
const timer = ({ dispatch, getState }: { dispatch: Dispatch; getState: any }) => {
  setInterval(() => {
    const { count } = getState().counter;

    // prevent timer when counter value reached to 10
    if (count < 10) {
      count < 0 ? dispatch(decrement()) : dispatch(increment());
    }
  }, 1000);

  return (next: Dispatch<AnyAction>) => (action: Action) => {
    next(action);
  };
};

export default timer;
