import React, { Component } from "react";
import Logout from "./Logout";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to home buddy </h1>
        <Logout />
      </div>
    );
  }
}

export default Home;
