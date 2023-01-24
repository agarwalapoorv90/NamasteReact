import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Body from "./components/Body";

/**
 * Header
 *  - Logo (Title)
 *  - Nav Items
 * Body
 *  - Card
 *    - Image
 *    - Details
 * Footer
 */

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
