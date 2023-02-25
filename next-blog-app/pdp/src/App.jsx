import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "myApp/Header";
import Footer from "myApp/Footer";

const App = () => (
  <div className="container">
    <Header />
    <div className="content"> PDP page content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
