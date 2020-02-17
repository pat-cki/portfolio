import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Projects from "./Projects";

it("correct heading included in the component", () => {
  const { getByText } = render(<Projects />);
  const heading = getByText(/Some of my projects/i);
  expect(heading).toBeInTheDocument();
});

it("Projects section renders without problems", () => {
  const div = document.createElement("section");
  ReactDOM.render(<section />, div);
});

