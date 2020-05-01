import React from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import comp from "../images/comp.png";
import coinSpidy from "../images/coinSpidy.png";
import check from "../images/check.png";
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
          <Box style={{ marginBottom: "4px" }}>
            <img src={comp} alt="coin" width="36" height="37" />
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

        <Box pb={1.5} style={{ width: "45%" }}>
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
              ? props.schedule.consumed_data + "  GB"
              : props.schedule.consumed_data + "  MB"}
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

        <Box mt={1} style={{ width: "18%" }}>
          <Box
            display="flex"
            style={{ padding: "1px 2px 1px 4px" }}
            justifyContent="flex-end"
          >
            <Box style={{ paddingRight: "5px", paddingTop: "3px" }}>
              <img src={coinSpidy} alt="coinSpidy" width="14px" height="14px" />
            </Box>
            <Box>
              <span style={{ color: "rgba(74, 97, 242, 1)", fontWeight: 600 }}>
                {props.schedule.token_received + "  Spidy"}{" "}
              </span>
            </Box>
          </Box>
          <Box display="flex" mt={2.8} justifyContent="flex-end">
            <Box>
              <span
                style={{
                  fontFamily: "Avenir-Medium",
                  fontSize: "14px",
                  color: "rgba(13, 184, 114, 1)",
                }}
              >
                Completed
              </span>
            </Box>
            <Box style={{ padding: "2px 0px 0px 5px" }}>
              <img src={check} alt="check" width="15px" height="15px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
