import React from "react";
import PropTypes from "prop-types";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";
import thumbIcon from "../images/thumbIcon.png";
const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "white",
      },
      track: {
        color: "rgba(255, 255, 255, 1)",
      },
      rail: {
        color: "rgba(229, 229, 229, 1)",
      },
    },
  },
});

class SimpleSlider extends React.Component {
  state = {
    value: 250,
  };

  handleChange = (event, value) => {
    console.log(this.state.value);
    this.setState({ value });
    this.props.setData(value);
  };

  render() {
    const { value } = this.state;

    return (
      <ThemeProvider theme={muiTheme}>
        <div style={{ width: 150 }}>
          <Slider
            min={0}
            max={1000}
            value={value}
            onChange={this.handleChange}
          />
        </div>
      </ThemeProvider>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleSlider;
