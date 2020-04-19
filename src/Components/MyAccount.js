import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Sidebar from "./Sidebar";

import "./home.css";
import SideModal from "./SideModal";
// const electron = window.require("electron").remote;

class MyAccount extends Component {
  render() {
    return (
      <div className="home">
        <Box display="flex" style={{ width: "100%", height: "100%" }}>
          <Sidebar />
          <Box
            flexGrow={100}
            style={{
              height: "100%",

              borderRight: "18px solid rgba(74, 97, 242, 1)",
            }}
          >
            <Box
              style={{
                position: "absolute",
                right: -1,
                bottom: "45%",
              }}
            >
              <SideModal />
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}
export default MyAccount;
