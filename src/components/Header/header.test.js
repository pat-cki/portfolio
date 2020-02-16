import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Header from "./Header";


it("renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

it("renders correct heading", () => {
  const { getByText } = render(<Header />);
  const heading = getByText(/Pat Cichocki/i);
  expect(heading).toBeInTheDocument();
});