import React, { Component } from "react";
import arrowTo from "../images/arrowTo.png";
import empty from "../images/empty.png";
import Box from "@material-ui/core/Box";
export default class EmptySchedule extends Component {
  render() {
    return (
      <Box display="flex" style={{ width: "100%", margin: "8% 0px 8px 8px" }}>
        <Box
          display="flex"
          style={{ width: "62%", maxWidth: "602px" }}
          flexDirection="column"
          alignItems="flex-end"
        >
          <Box>
            <img src={empty} width="251" height="225" alt="empty" />
          </Box>
          <Box
            pr={2}
            pt={1}
            style={{
              width: "50%",
              textAlign: "center",
              maxWidth: "208px",
              fontFamily: "Avenir",
              fontSize: "16px",
              fontWeight: 500,

              color: "rgba(49, 49, 49, 1)",
            }}
          >
            {this.props.content}
          </Box>
        </Box>

        <Box style={{ padding: "11% 10px 11px 10px " }}>
          <img src={arrowTo} width="246" height="127" alt="arrowTo" />
        </Box>
      </Box>
    );
  }
}
