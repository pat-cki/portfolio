import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";

it("Footer renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});