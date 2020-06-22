import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App title", () => {
  const { getByText } = render(<App />);
  expect(getByText("A Useless App")).toBeInTheDocument();
});
