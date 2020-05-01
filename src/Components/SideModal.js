import React, { Component } from "react";
import Slider from "./Silder";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import "./home.css";
import CustomizedSwitches from "./switch";
import plus from "../images/plus.png";
import cellTower from "../images/cellTower.png";
import caret from "../images/caret.png";
import hexagon from "../images/hexagon.png";
import clock from "../images/clock.png";
import schedule from "../images/schedule.png";
import circle from "../images/circle.png";
import start from "../images/stop.png";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default class SideModal extends Component {
  state = {
    open: false,
    isMB: true,
    time: "2 Hrs",
    sliderValue: 250,
  };

  handleTime = (newtime) => {
    this.setState({
      time: newtime,
    });
  };

  handleIsMB = (val) => {
    if (val === "MB") {
      this.setState({
        isMB: true,
      });
    } else {
      this.setState({
        isMB: false,
      });
    }
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleSetData = (value) => {
    this.setState({
      sliderValue: value,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div>
        <img
          onClick={this.handleClickOpen}
          src={plus}
          alt="open Modal"
          width="57px"
          height="75px"
        />

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          PaperProps={{
            style: {
              backgroundColor: "rgba(255,255,255,0.5)",
            },
          }}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            style={{ width: "100%", height: "100%" }}
          >
            <Box
              onClick={this.handleClose}
              flexGrow={1}
              style={{ position: "relative" }}
            >
              <Box
                style={{
                  width: "79px",
                  height: "84px",
                  position: "absolute",
                  right: -39,
                  bottom: "43%",
                  zIndex: 1,
                  backgroundImage: `url(${hexagon})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src={hexagon} alt="hexagon" width="79px" height="84px" /> */}
              </Box>

              <Box
                style={{
                  position: "absolute",
                  right: 10,
                  bottom: "47.82%",
                  zIndex: 2,
                }}
              >
                <img src={caret} alt="hexagonCaret" width="8px" height="16px" />
              </Box>
            </Box>

            <Box
              flex="0 0 400px"
              style={{
                backgroundColor: "rgba(74, 97, 242, 1)",
                padding: "25px 10px 10px 10px",
              }}
            >
              <Box
                display="flex"
                style={{ padding: "17px 10px 10px 10px" }}
                alignItems="center"
              >
                <Box p={1}>
                  <img
                    src={cellTower}
                    alt="cellTower logo"
                    width="23px"
                    height="20px"
                  />
                </Box>
                <Box p={1}>
                  <span
                    style={{
                      fontFamily: "Avenir-Heavy",
                      fontSize: "20px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Set the data
                  </span>
                </Box>
              </Box>

              <Box display="flex" style={{ padding: "10px 10px 10px 10px" }}>
                <Box style={{ padding: "8px 10px 10px 11px" }} mr={2}>
                  <Slider setData={this.handleSetData} />
                </Box>
                <Box display="flex" p={1}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    style={{
                      width: "51px",
                      height: "31px",
                      borderBottom: "2px solid rgba(169, 169, 169, 1)",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        padding: "4px 2px 4px 0px",
                      }}
                    >
                      {this.state.isMB
                        ? this.state.sliderValue
                        : this.state.sliderValue / 100}
                    </span>
                  </Box>
                  <Box
                    onClick={() => this.handleIsMB("MB")}
                    ml={1}
                    mr={1}
                    className="MB"
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    style={{
                      width: "51px",
                      height: "31px",
                      backgroundColor: this.state.isMB
                        ? "white"
                        : "rgba(42, 66, 213, 1)",
                      borderRadius: "2px",
                    }}
                  >
                    <span
                      style={{
                        color: this.state.isMB
                          ? "black"
                          : "rgba(229, 229, 229, 1)",
                        padding: "4px 2px 4px 0px",
                      }}
                    >
                      MB
                    </span>
                  </Box>
                  <Box
                    onClick={() => this.handleIsMB("GB")}
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    className="GB"
                    style={{
                      width: "51px",
                      height: "31px",
                      backgroundColor: !this.state.isMB
                        ? "white"
                        : "rgba(42, 66, 213, 1)",
                      borderRadius: "2px",
                    }}
                  >
                    <span
                      style={{
                        color: !this.state.isMB
                          ? "black"
                          : "rgba(229, 229, 229, 1)",
                        padding: "4px 2px 4px 0px",
                      }}
                    >
                      GB
                    </span>
                  </Box>
                </Box>
              </Box>

              <Box display="flex" mt={2} mb={1.2} ml={0.4}>
                <Box style={{ padding: "13px 3px 5px 10px" }}>
                  <img src={clock} alt="clock" width="22" height="21" />
                </Box>
                <Box style={{ padding: "9px 9px 9px 9px" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Set the Duration
                  </span>
                </Box>
              </Box>

              <Box display="flex" ml={2}>
                <Box
                  onClick={() => this.handleTime("30 Min")}
                  className="MB"
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  style={{
                    width: "76px",
                    height: "31px",
                    backgroundColor:
                      this.state.time === "30 Min"
                        ? "white"
                        : "rgba(42, 66, 213, 1)",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.time === "30 Min"
                          ? "black"
                          : "rgba(229, 229, 229, 1)",
                      padding: "4px 2px 4px 0px",
                    }}
                  >
                    30 Min
                  </span>
                </Box>

                <Box
                  onClick={() => this.handleTime("1 Hrs")}
                  ml={2}
                  mr={2}
                  className="MB"
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  style={{
                    width: "56px",
                    height: "31px",
                    backgroundColor:
                      this.state.time === "1 Hrs"
                        ? "white"
                        : "rgba(42, 66, 213, 1)",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.time === "1 Hrs"
                          ? "black"
                          : "rgba(229, 229, 229, 1)",
                      padding: "4px 2px 4px 0px",
                    }}
                  >
                    1 Hrs
                  </span>
                </Box>

                <Box
                  onClick={() => this.handleTime("2 Hrs")}
                  className="MB"
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  style={{
                    width: "58px",
                    height: "31px",
                    backgroundColor:
                      this.state.time === "2 Hrs"
                        ? "white"
                        : "rgba(42, 66, 213, 1)",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.time === "2 Hrs"
                          ? "black"
                          : "rgba(229, 229, 229, 1)",
                      padding: "4px 2px 4px 0px",
                    }}
                  >
                    2 Hrs
                  </span>
                </Box>

                <Box
                  onClick={() => this.handleTime("4 Hrs")}
                  ml={2}
                  mr={2}
                  className="MB"
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  style={{
                    width: "56px",
                    height: "31px",
                    backgroundColor:
                      this.state.time === "4 Hrs"
                        ? "white"
                        : "rgba(42, 66, 213, 1)",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.time === "4 Hrs"
                          ? "black"
                          : "rgba(229, 229, 229, 1)",
                      padding: "4px 2px 4px 0px",
                    }}
                  >
                    4 Hrs
                  </span>
                </Box>

                <Box
                  onClick={() => this.handleTime("6 Hrs")}
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  className="GB"
                  style={{
                    width: "56px",
                    height: "31px",
                    backgroundColor:
                      this.state.time === "6 Hrs"
                        ? "white"
                        : "rgba(42, 66, 213, 1)",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.time === "6 Hrs"
                          ? "black"
                          : "rgba(229, 229, 229, 1)",
                      padding: "4px 2px 4px 0px",
                    }}
                  >
                    6 Hrs
                  </span>
                </Box>
              </Box>

              <Box display="flex" mt={6} ml={0.6}>
                <Box mr={3} style={{ padding: "13px 3px 5px 7px" }}>
                  <img
                    src={schedule}
                    alt="schedule"
                    width="22"
                    height="21"
                    style={{ zIndex: 100, position: "absolute" }}
                  />
                </Box>
                <Box style={{ padding: "9px 9px 9px 6px" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgba(229, 229, 229, 1)",
                    }}
                  >
                    Frequency
                  </span>
                </Box>
                <Box ml={16} p={1}>
                  <CustomizedSwitches />
                </Box>
              </Box>

              <Box
                display="flex"
                style={{ position: "absolute", bottom: 48 }}
                ml={5}
              >
                <Box mr={3}>
                  <Button
                    disableElevation={false}
                    style={{
                      backgroundColor: "rgba(74, 97, 242, 1)",
                      border: "1px solid white",
                      width: "150px",
                      height: "50px",
                      color: "white",
                    }}
                  >
                    <span style={{ paddingTop: "4px" }}>
                      {" "}
                      <img
                        src={circle}
                        alt="schedule"
                        width="15"
                        height="15"
                        style={{}}
                      />
                    </span>
                    <span
                      style={{
                        paddingLeft: "11px",
                        fontSize: "16px",
                        textTransform: "capitalize",
                      }}
                    >
                      {" "}
                      Start Later{" "}
                    </span>
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    disableElevation={false}
                    style={{
                      backgroundColor: "white",
                      color: "rgba(74, 97, 242, 1)",
                      width: "150px",
                      height: "50px",
                    }}
                  >
                    <span style={{ paddingTop: "4px" }}>
                      {" "}
                      <img
                        src={start}
                        alt="schedule"
                        width="15"
                        height="15"
                        style={{}}
                      />
                    </span>
                    <span
                      style={{
                        paddingLeft: "11px",
                        textTransform: "capitalize",
                        fontSize: "16px",
                      }}
                    >
                      {" "}
                      Start Now{" "}
                    </span>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Dialog>
      </div>
    );
  }
}
