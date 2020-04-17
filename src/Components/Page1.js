import React, { Component } from "react";
import Logout from "./Logout";
import "./home.css";

import boy1 from "../images/boy1.png";

import spider2 from "../images/spider2.png";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
class Page1 extends Component {
  nextPage = () => {
    this.props.history.push("/page2");
  };

  render() {
    return (
      <div className="home">
        <Box display="flex" style={{ padding: "25px 25px 0px 98px" }}>
          <img src={spider2} alt="logo" width="108px" height="30px" />
        </Box>

        <Box
          display="flex"
          style={{ padding: "0px 25px 25px 100px", width: "100%" }}
        >
          <Box style={{ width: "50%", paddingTop: "35px" }}>
            <span
              style={{
                fontFamily: "Avenir-Heavy",
                fontSize: "32px",
                fontWeight: "bold",
                color: "rgba(49, 49, 49, 1)",
              }}
            >
              HOW IT WORKS
            </span>
            <Box
              style={{
                margin: "15px 0px 2px 30px",
                width: "100%",
                paddingTop: "10px",
                borderLeft: "2px solid rgba(216, 216, 216, 1)",
                height: "95%",
              }}
            >
              <Box
                style={{
                  height: "40px",
                  width: "100%",
                  padding: "2px 32px 15px 32px",
                  position: "relative",
                  left: "-4px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "rgba(49, 49, 49, 1)",
                    lineHeight: "40px",
                    marginTop: "0px",
                  }}
                >
                  1. Hello there! Welcome to Spidy
                </p>
              </Box>

              <Box
                style={{
                  borderLeft: "6px solid rgba(74, 97, 242, 1)",
                  height: "40px",
                  width: "68%",
                  padding: "2px 32px 32px 25px",
                  position: "relative",
                  left: "-4px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "rgba(49, 49, 49, 1)",
                    lineHeight: "35px",
                    marginTop: "0px",
                  }}
                >
                  2. Spidy uses your unused data from your phone to crawl some
                  info on web
                </p>
              </Box>

              <Box
                justifyContent="flex-end"
                display="flex"
                p={4}
                style={{ width: "64%" }}
              >
                <Box>
                  <Button
                    onClick={this.nextPage}
                    variant="contained"
                    color="primary"
                    style={{
                      width: "150px",
                      height: "50px",
                      backgroundColor: "rgba(74, 97, 242, 1)",
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              width: "50%",
              marginTop: "29px",
              padding: "10px 10px 10px 55px",
            }}
          >
            <img src={boy1} alt="boylogo" height="504px" width="400px" />
          </Box>
        </Box>
        {/* <Logout /> */}
      </div>
    );
  }
}

export default Page1;
