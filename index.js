// JS render of Element
/* const heading = document.createElement("h1");
heading.innerHTML = "heading";
const root = document.getElementById("root")
root.appendChild(heading); */

// React render of element

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
