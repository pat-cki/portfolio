import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("correct heading included", () => {
  const { getByText } = render(<Header />);
  const heading = getByText(/Pat Cichocki/i);
  expect(heading).toBeInTheDocument();
});