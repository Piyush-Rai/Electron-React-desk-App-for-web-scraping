import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Sidebar from "./Sidebar";
import "./home.css";
class MyAccount extends Component {
  render() {
    return (
      <div className="home">
        <Box display="flex" style={{ width: "100%", height: "100%" }}>
          <Sidebar />
          <Box>{/* main content */}</Box>
        </Box>
      </div>
    );
  }
}
export default MyAccount;
