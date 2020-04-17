import React, { Component } from "react";
import Logout from "./Logout";
import "./home.css";

import boy2 from "../images/boy2.png";

import spider2 from "../images/spider2.png";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
class Page2 extends Component {
  nextPage = () => {
    console.log("agla page");
    this.props.history.push("/page3");
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
                  height: "40px",
                  width: "74%",
                  padding: "2px 32px 32px 32px",
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
                style={{
                  borderLeft: "6px solid rgba(74, 97, 242, 1)",
                  height: "40px",
                  width: "75%",
                  padding: "2px 32px 32px 28px",
                  position: "relative",
                  left: "-4px",
                  marginTop: "20px",
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
                  3. You can set limits for data & duration. Get rewarded for
                  each completed session.
                </p>
              </Box>

              <Box
                justifyContent="flex-end"
                display="flex"
                p={3}
                style={{ width: "75%" }}
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
              marginTop: "-12px",
              padding: "10px 10px 10px 55px",
              marginLeft: "72px",
            }}
          >
            <img src={boy2} alt="boylogo" height="510px" width="300px" />
          </Box>
        </Box>
        {/* <Logout /> */}
      </div>
    );
  }
}

export default Page2;
