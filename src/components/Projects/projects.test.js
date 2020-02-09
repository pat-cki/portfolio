import React from "react";
import { render } from "@testing-library/react";
import Projects from "./Projects";

it("correct heading included in the component", () => {
  const { getByText } = render(<Projects />);
  const heading = getByText(/Some of my projects/i);
  expect(heading).toBeInTheDocument();
});