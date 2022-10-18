import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";
import counter from "./redux/reducers/counter";

describe("Should render App Component", () => {
  test("Sets up initial state with actions", () => {
    renderWithProviders(<App />);
    const timestampSection = screen.getByTestId("timestamp");

    expect(timestampSection).toBeInTheDocument();
  });

  test("should render buttons", () => {
    renderWithProviders(<App />);
    const decrement = screen.getByTestId("decrement");
    const increment = screen.getByTestId("increment");

    expect(decrement).toBeInTheDocument();
    expect(increment).toBeInTheDocument();
  });

  test("should return the initial state", () => {
    expect(counter(undefined, { type: undefined })).toEqual({ count: 0, step: 1 });
  });

  test("should increment state", () => {
    expect(counter(undefined, { type: "increment" })).toEqual({ count: 1, step: 1 });
  });

  test("should decrement state", () => {
    expect(counter(undefined, { type: "decrement" })).toEqual({ count: -1, step: 1 });
  });
});
