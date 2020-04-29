import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Sidebar from "./Sidebar";

import "./home.css";
import SideModal from "./SideModal";
const remote = window.require("electron").remote;
// const electron = window.require("electron").remote;

class MyAccount extends Component {
  componentDidMount() {
    remote.session.defaultSession.cookies
      .get({ name: "connect.sid" })
      .then((cookies) => {
        console.log("My account vale page pr++++ ");
        console.log(cookies);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout = () => {
    console.log("bahar");

    remote.session.defaultSession.clearStorageData([], (data) => {});
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="home">
        <Box display="flex" style={{ width: "100%", height: "100%" }}>
          <Sidebar logout={this.logout} />
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
