import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./home.css";

import spider3 from "../images/spider3.png";
import fill from "../images/fill.png";
import fill1 from "../images/fill1.png";
import fill2 from "../images/fill2.png";
import fill3 from "../images/fill3.png";
import fill4 from "../images/fill4.png";
import fill5 from "../images/fill5.png";
import fill6 from "../images/fill6.png";
import fill7 from "../images/fill7.png";

export default class Sidebar extends Component {
  render() {
    return (
      <Box
        flex="0 0 300px"
        style={{
          backgroundColor: "rgba(74, 97, 242, 1)",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ height: "70px", backgroundColor: "rgba(6, 24, 139, 1)" }}
        >
          <img src={spider3} alt="logo" width="108px" height="30px" />
        </Box>
        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "10px 8px 8px 8px" }}>
            {" "}
            <img src={fill} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 7px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              My spidy
            </span>
          </Box>
        </Box>

        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "10px 8px 8px 8px" }}>
            {" "}
            <img src={fill1} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 3px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Wallet
            </span>
          </Box>
        </Box>

        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "10px 8px 8px 8px" }}>
            {" "}
            <img src={fill2} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 3px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Bank Details
            </span>
          </Box>
        </Box>

        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "10px 8px 8px 8px" }}>
            {" "}
            <img src={fill3} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 3px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Transactional History
            </span>
          </Box>
        </Box>

        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "10px 8px 8px 8px" }}>
            {" "}
            <img src={fill4} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 3px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Privacy Policy
            </span>
          </Box>
        </Box>

        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "10px 8px 8px 8px" }}>
            {" "}
            <img src={fill5} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 3px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              How it works
            </span>
          </Box>
        </Box>

        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "14px 8px 8px 8px" }}>
            {" "}
            <img src={fill6} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 3px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Support
            </span>
          </Box>
        </Box>

        <Box
          className="nav"
          display="flex"
          justifyContent="felx=start"
          alignItems="center"
          style={{ height: "60px", paddingLeft: "19px" }}
        >
          <Box style={{ padding: "10px 8px 8px 8px" }}>
            {" "}
            <img src={fill7} alt="logo" width="18px" height="18px" />{" "}
          </Box>
          <Box style={{ padding: "0px 2px 3px 3px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Logout
            </span>
          </Box>
        </Box>
      </Box>
    );
  }
}
