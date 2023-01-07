import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "head1",
    hello: "world"
  },
  "Hello Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "head2",
  },
  "Hello Heading 2"
);

const heading = React.createElement("div", null, [heading1, heading2]);

const domeNode = document.getElementById("root");
const root = ReactDOM.createRoot(domeNode);
root.render(heading);
