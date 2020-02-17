import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

it("About nav element included in the component", () => {
  const { getByText } = render(<Navigation />);
  const heading = getByText(/About/i);
  expect(heading).toBeInTheDocument();
});

it("Navigation renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navigation />, div);
});