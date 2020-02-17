import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Stack from "./Stack";

it("correct heading included in the component", () => {
  const { getByText } = render(<Stack />);
  const heading = getByText(/Technologies I use/i);
  expect(heading).toBeInTheDocument();
});

it("renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stack />, div);
});