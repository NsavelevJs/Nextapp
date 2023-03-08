import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="container">
    <Header app={{name:"home"}} />
    <div className="content"> this is the home page</div>
   
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
