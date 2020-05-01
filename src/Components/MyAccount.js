import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Sidebar from "./Sidebar";
import Shape from "../images/Shape.png";
import EmptySchedule from "./EmptySchedule";
import AllupcomingSchedules from "./AllupcomingSchedule";
import AllCompletedSchedules from "./AllcompletedSchedule";
import "./home.css";
import SideModal from "./SideModal";
import axios from "axios";
import { Button } from "@material-ui/core";
const remote = window.require("electron").remote;
// const electron = window.require("electron").remote;

class MyAccount extends Component {
  state = {
    name: "",
    email: "",
    image: "",
    user_id: "",
    curTab: "ongoing",
    allOngoingSchedules: [],
    allUpcomingSchedules: [],
    allCompletedSchedules: [],
  };

  componentDidMount() {
    remote.session.defaultSession.cookies
      .get({ name: "connect.sid" })
      .then((cookies) => {
        console.log("cookie ===");
        console.log(cookies);
        return cookies;
      })
      .then((cookies) => {
        if (cookies.length) {
          const axiosConfig = {
            withCredentials: true,
          };

          axios
            .get("https://advcrawler.buyhatke.com/spidy/profile", axiosConfig)
            .then((res) => {
              console.log(res);
              console.log("profile details");

              if (res.data.success) {
                const { user_id, name, email, image } = res.data.data;
                this.setState({
                  user_id,
                  name,
                  email,
                  image,
                });
              }
            });

          const axiosConfigform = {
            withCredentials: true,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          };

          axios
            .get(
              "https://advcrawler.buyhatke.com/spidy/completed?page=1",
              axiosConfigform
            )
            .then((res) => {
              console.log(res);
              console.log("completed schedules");

              if (res.data.success) {
                const allCompletedSchedules = res.data.data;
                this.setState({
                  allCompletedSchedules,
                });
              }
            });

          axios
            .get(
              "https://advcrawler.buyhatke.com/spidy/ongoing",
              axiosConfigform
            )
            .then((res) => {
              console.log(res);
              console.log("ongoing schedules");

              if (res.data.success) {
                const allOngoingSchedules = res.data.data;
                this.setState({
                  allOngoingSchedules,
                });
              }
            });

          axios
            .get(
              "https://advcrawler.buyhatke.com/spidy/upcoming?page=1",
              axiosConfigform
            )
            .then((res) => {
              console.log(res);
              console.log("upcoming  schedules");

              if (res.data.success) {
                const allUpcomingSchedules = res.data.data;
                this.setState({
                  allUpcomingSchedules,
                });
              }
            });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }

  handleTabSwitch = (curTab) => {
    this.setState({
      curTab,
    });
  };

  logout = () => {
    console.log("bahar");

    remote.session.defaultSession.clearStorageData([], (data) => {});
    this.props.history.push("/");
  };

  render() {
    let dispalyComponent;
    if (this.state.curTab === "ongoing") {
      // if (this.state.allOngoingSchedules.length === 0)
      dispalyComponent = (
        <EmptySchedule content="Currently you don’t have any ongoing Spidy sessions" />
      );
    } else if (this.state.curTab === "upcoming") {
      if (this.state.allUpcomingSchedules.length === 0)
        dispalyComponent = (
          <EmptySchedule content="Currently you don’t have any upcoming Spidy sessions" />
        );
      else {
        dispalyComponent = (
          <AllupcomingSchedules
            allUpcomingSchedules={this.state.allUpcomingSchedules}
          />
        );
      }
    } else if (this.state.curTab === "completed") {
      if (this.state.allCompletedSchedules.length === 0)
        dispalyComponent = (
          <EmptySchedule content="Currently you don’t have any completed Spidy sessions" />
        );
      else {
        dispalyComponent = (
          <AllCompletedSchedules
            allCompletedSchedules={this.state.allCompletedSchedules}
          />
        );
      }
    } else {
      dispalyComponent = (
        <EmptySchedule content="Currently you don’t have any completed Spidy sessions" />
      );
    }

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
              display="flex"
              style={{ width: "100%", padding: "1px 1px 16px 42px" }}
            >
              <Box style={{ padding: "26px 6px 8px 8px" }}>
                <img src={Shape} alt="quote" width="18px" height="16px" />
              </Box>
              <Box style={{ padding: "33px 8px 8px 0px", width: "55%" }}>
                <span
                  style={{
                    fontFamily: "Avenir",
                    fontSize: "17px",
                    fontWeight: 600,
                    fontStyle: "oblique",
                    color: "rgba(49, 49, 49, 1)",
                  }}
                >
                  Some data/note related to crawling/any facts/about the data
                  being crawled here
                </span>
              </Box>
              {this.state.user_id !== "" ? (
                <Box
                  p={0.4}
                  display="flex"
                  flexWrap="nowrap"
                  flexDirection="row-reverse"
                  style={{ position: "absolute", right: 44 }}
                >
                  <Box style={{ paddingTop: "4px" }}>
                    <img
                      width="60px"
                      height="60px"
                      src={this.state.image}
                      style={{ borderRadius: "50%" }}
                      alt="profile"
                    />
                  </Box>
                  <Box
                    p={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    justifyContent="center"
                  >
                    <Box>
                      <span
                        style={{
                          fontFamily: "Avenir",
                          fontSize: "14px",
                          fontWeight: 600,

                          color: "rgba(49, 49, 49, 1)",
                        }}
                      >
                        {this.state.name}
                      </span>
                    </Box>
                    <Box
                      style={{
                        fontFamily: "Avenir",
                        fontSize: "14px",
                        fontWeight: 600,
                        paddingTop: "2px",
                        color: "rgba(49, 49, 49, 1)",
                      }}
                    >
                      {this.state.email}
                    </Box>
                  </Box>
                </Box>
              ) : null}
            </Box>

            <Box
              display="flex"
              style={{ padding: "20px 8px 7px 48px ", width: "100%" }}
            >
              <Box pr={4} style={{ width: "27%" }}>
                <Button
                  onClick={() => this.handleTabSwitch("upcoming")}
                  disableElevation={
                    this.state.curTab === "upcoming" ? false : true
                  }
                  style={{
                    backgroundColor:
                      this.state.curTab === "upcoming"
                        ? "rgba(74, 97, 242, 1)"
                        : "white",
                    border:
                      this.state.curTab === "upcoming"
                        ? ""
                        : "1px solid rgba(169, 169, 169, 1)",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.curTab === "upcoming"
                          ? "white"
                          : "rgba(169, 169, 169, 1)",
                      fontSize: "18px",
                      textTransform: "capitalize",
                    }}
                  >
                    Upcoming
                  </span>
                </Button>
              </Box>

              <Box pr={4} style={{ width: "27%" }}>
                <Button
                  onClick={() => this.handleTabSwitch("ongoing")}
                  variant="contained"
                  disableElevation={
                    this.state.curTab === "ongoing" ? false : true
                  }
                  style={{
                    backgroundColor:
                      this.state.curTab === "ongoing"
                        ? "rgba(74, 97, 242, 1)"
                        : "white",
                    border:
                      this.state.curTab === "ongoing"
                        ? ""
                        : "1px solid rgba(169, 169, 169, 1)",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.curTab === "ongoing"
                          ? "white"
                          : "rgba(169, 169, 169, 1)",
                      textTransform: "capitalize",
                      fontSize: "18px",
                    }}
                  >
                    Ongoing
                  </span>
                </Button>
              </Box>

              <Box style={{ width: "27%" }}>
                <Button
                  onClick={() => this.handleTabSwitch("completed")}
                  variant="contained"
                  disableElevation={
                    this.state.curTab === "completed" ? false : true
                  }
                  style={{
                    backgroundColor:
                      this.state.curTab === "completed"
                        ? "rgba(74, 97, 242, 1)"
                        : "white",
                    border:
                      this.state.curTab === "completed"
                        ? ""
                        : "1px solid rgba(169, 169, 169, 1)",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <span
                    style={{
                      color:
                        this.state.curTab === "completed"
                          ? "white"
                          : "rgba(169, 169, 169, 1)",
                      textTransform: "capitalize",
                      fontSize: "18px",
                    }}
                  >
                    Completed
                  </span>
                </Button>
              </Box>
            </Box>

            <Box style={{ width: "100%", height: "100%" }}>
              {/* ==================Display Content ==================================================*/}

              {dispalyComponent}
            </Box>

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
