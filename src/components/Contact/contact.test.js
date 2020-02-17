import React from "react";
import ReactDOM from "react-dom";
import Contact from "./Contact";

it("Contact components renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
});