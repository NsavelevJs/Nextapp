import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "myApp/Header";
import Footer from "myApp/Footer";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="container">
    <SafeComponent>
    <Header />
    </SafeComponent>
    <div className="content"> PDP page content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
