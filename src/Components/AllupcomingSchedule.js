import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SimplePaper from "./SimplePaper";
export default class AllupcomingSchedule extends Component {
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
        {this.props.allUpcomingSchedules.length ? (
          <Box
            style={{
              width: "83.3%",
              padding: "20px 20px 20px 20px",
              marginLeft: "26px",
            }}
          >
            {this.props.allUpcomingSchedules.map((schedule, index) => {
              return <SimplePaper schedule={schedule} key={index} />;
            })}
          </Box>
        ) : null}
      </Box>
    );
  }
}
