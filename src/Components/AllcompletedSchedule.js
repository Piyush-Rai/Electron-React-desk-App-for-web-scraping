import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SimplePaperComp from "./SimplePaperComp";
export default class AllcompletedSchedule extends Component {
  render() {
    return (
      <Box
        style={{
          width: "100%",
          height: "73%",
          overflowY: "scroll",
          backgroundColor: "rgba(238, 242, 255, 1)",
          marginTop: "4%",
        }}
      >
        {this.props.allCompletedSchedules.length ? (
          <Box
            style={{
              width: "83.3%",
              padding: "20px 20px 20px 20px",
              marginLeft: "26px",
            }}
          >
            {this.props.allCompletedSchedules.map((schedule, index) => {
              return <SimplePaperComp schedule={schedule} key={index} />;
            })}
          </Box>
        ) : null}
      </Box>
    );
  }
}
