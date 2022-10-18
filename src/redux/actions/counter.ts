import { createAction } from "@reduxjs/toolkit";

/**
 * Increment action for increment counter state by N (step state)
 */
export const increment = createAction("increment");

/**
 * Decrement action for decrement counter state by N (step state)
 */
export const decrement = createAction("decrement");

/**
 * Step action for increment counter state by N (step state)
 */
export const step = createAction<number | undefined>("step");
