import React from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import coin from "../images/coin.png";
import dots from "../images/dots.png";

export default function SimplePaper(props) {
  let timeStamp = props.schedule.scheduled_at.split(/(\s+)/);
  let date = timeStamp[0];
  let time = timeStamp[1];

  return (
    <Paper
      elevation={0}
      square={true}
      style={{
        width: "100%",
        height: "70px",
        padding: "15px 20px 15px 4%",
        marginBottom: "6px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        style={{ width: "100%", height: "100%" }}
      >
        <Box style={{ width: "35%" }}>
          <Box>
            <img src={coin} alt="coin" width="36" height="37" />
          </Box>
          <Box pt={1}>
            <span
              style={{
                fontFamily: "Avenir-Medium",
                fontSize: "14px",
                color: "rgba(49, 49, 49, 1)",
              }}
            >
              {date}
            </span>
          </Box>
        </Box>

        <Box pb={1.5} style={{ width: "50%" }}>
          <span
            style={{
              marginRight: "8px",
              fontFamily: "Avenir-Medium",
              fontSize: "24px",
              fontWeight: 600,
              color: "rgba(49, 49, 49, 1)",
            }}
          >
            {props.schedule.maxData <= 10
              ? props.schedule.maxData + "  GB"
              : props.schedule.maxData + "  MB"}
          </span>
          <span
            style={{
              fontFamily: "Avenir-Medium",
              fontSize: "24px",
              fontWeight: 600,

              color: "rgba(49, 49, 49, 1)",
            }}
          >
            {" "}
            (
            {props.schedule.duration < 7
              ? props.schedule.duration + "  Hours"
              : props.schedule.duration + "  Minutes"}
            )
          </span>
        </Box>

        <Box dispaly="flex" flexDirection="column" alignItems="flex-end">
          <Box style={{ padding: "0px 0px 22px 60px" }}>
            <img src={dots} alt="dots" width="21" height="7" />
          </Box>
          <Box pt={1}>
            <span
              style={{
                fontFamily: "Avenir-Medium",
                fontSize: "14px",
                color: "rgba(49, 49, 49, 1)",
              }}
            >
              (
              {props.schedule.time +
                ":00 - " +
                (props.schedule.time + props.schedule.duration) +
                ":00"}
              )
            </span>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
