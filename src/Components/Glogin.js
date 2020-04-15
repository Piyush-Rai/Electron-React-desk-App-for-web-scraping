import React, { Component } from "react";
import spider from "../images/spider_sm.png";
import title from "../images/title.png";
import google from "../images/google.png";
import GoogleLogin from "react-google-login";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
class Glogin extends Component {
  state = {
    isSignedIn: false,
  };
  responseGoogle = (res) => {
    console.log(res);
    this.props.history.push("/home");
  };
  failGoogle = (res) => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);

    return (
      <div style={{ marginTop: 62 }}>
        <Box display="flex" p={1} justifyContent="center" alignItems="center">
          <Box p={1}>
            {" "}
            <img src={spider} alt="spider" width="100px" height="97px" />
          </Box>
          <Box p={1} alignItems="center">
            {" "}
            <img
              src={title}
              alt="title"
              width="205.23px"
              height="79.07px"
            ></img>
          </Box>

          {/* <GoogleLogin
          clientId="592790702111-fcc24gegsbhvk9kted69dnhjpc1uijdf.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.failGoogle}
          cookiePolicy={"single_host_origin"}
        /> */}
        </Box>
        <Container
          style={{ marginTop: "10px", textAlign: "center" }}
          maxWidth="sm"
        >
          <span
            style={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "Avenir-Medium",
              fontSize: "30px",
            }}
          >
            Converting Unused Mobile/Wifi Data into Money for you
          </span>
        </Container>
        <Box
          display="flex"
          p={1}
          justifyContent="center"
          style={{ marginTop: 80 }}
        >
          <GoogleLogin
            clientId="592790702111-fcc24gegsbhvk9kted69dnhjpc1uijdf.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                style={{
                  backgroundImage: `url(${google})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: 300,
                  height: 50,
                }}
              ></button>
            )}
            buttonText=""
            onSuccess={this.responseGoogle}
            onFailure={this.failGoogle}
            cookiePolicy={"single_host_origin"}
            style={{
              background: "blue",
            }}
          />
        </Box>

        <Container
          style={{ marginTop: "10px", textAlign: "center", padding: 10 }}
          maxWidth="xs"
        >
          <span
            style={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "Avenir-Medium",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            By clicking this you are agreeing to Spidy TOS and Privacy Policy
          </span>
        </Container>
      </div>
    );
  }
}

export default Glogin;
