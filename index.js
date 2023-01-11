import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div class="title">
 *  <h1>Hello</h1>
 *  <h2>Apoorv's</h2>
 *  <h3>World</h3>
 * </div>
 */

/*
const heading1 = React.createElement("h1", { key: "h1" }, "Hello");
const heading2 = React.createElement("h2", { key: "h2" }, "Apoorv's");
const heading3 = React.createElement("h3", { key: "h3" }, "World");

const container = React.createElement(
  "div",
  {
    className: "title",
  },
  [heading1, heading2, heading3]
);
*/

/*
const container = (
  <div className="title">
    <h1>Hello</h1>
    <h2>Apoorv's</h2>
    <h3>World</h3>
  </div>
);
*/

const heading = <h1>Hi</h1>;

const Trunk = (props) => {
  return <div className="trunk">{props.children}</div>;
};

const Container = () => {
  return (
    <div className="title">
      <h1>Hello</h1>
      <h2>Apoorv's</h2>
      <h3>World</h3>
      <Trunk>
        {heading}
      </Trunk>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Container />);
