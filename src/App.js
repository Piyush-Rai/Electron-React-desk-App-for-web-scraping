import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Glogin from "./Components/Glogin";
import "./App.css";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Glogin} />
        <Route exact path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
