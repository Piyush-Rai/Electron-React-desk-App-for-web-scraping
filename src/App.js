import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Glogin from "./Components/Glogin";
import "./App.css";
import Home from "./Components/Home";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Glogin} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
      </Router>
    );
  }
}

export default App;
