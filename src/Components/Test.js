import React, { Component } from "react";
import spider from "../images/spider_sm.png";
import title from "../images/title.png";
import google from "../images/google.png";

import axios from "axios";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "./Glogin.css";
import Container from "@material-ui/core/Container";
const remote = window.require("electron").remote;

class Glogin extends Component {
  state = {
    isSignedIn: false,
  };

  componentWillMount() {
    /* axios.get("https://advcrawler.buyhatke.com/spidy/loggedIn/").then((res) => {
      console.log(res);
    });*/

    remote.session.defaultSession.cookies
      .get({ name: "connect.sid" })
      .then((cookies) => {
        console.log("cookie ===");
        console.log(cookies);
        if (cookies.length) this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = () => {
    console.log("bahar");

    remote.session.defaultSession.clearStorageData([], (data) => {
      console.log(data);
    });
  };

  handleGoogleLogin = () => {
    axios
      .post("https://advcrawler.buyhatke.com/spidy/glogin/", {
        source: "web",
        withCredentials: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res.data.url);
        console.log("=================================");

        // remote.getCurrentWindow().loadURL(res.data.url);
        // if (document.cookie)
        //   remote.getCurrentWindow().loadURL("http://localhost:3000");

        const BrowserWindow = remote.BrowserWindow;
        const win = new BrowserWindow({
          height: 600,
          width: 900,
          frame: false,
          show: false,
          parent: remote.getCurrentWindow(),
          webPreferences: {
            nodeIntegration: true,
          },
        });
        // console.log(win.webContents);
        win.loadURL(res.data.url);

        win.once("ready-to-show", () => {
          win.show();
        });

        win.webContents.on("did-frame-navigate", (event, newUrl) => {
          console.log("hello world     " + newUrl);

          remote.session.defaultSession.cookies
            .get({ name: "connect.sid" })
            .then((cookies) => {
              console.log(cookies);
              if (cookies.length) {
                win.hide();
                this.props.history.push("/home");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        });

        // remote.session.defaultSession.cookies
        //   .get({ name: "connect.sid" })
        //   .then((cookies) => {
        //     console.log(cookies);

        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        // axios.get(res.data.url, { withCredentials: true }).then((res) => {
        //   console.log(res);

        //   console.log("=====================+++++");

        //   axios
        //     .get("https://advcrawler.buyhatke.com/spidy/loggedIn/", {
        //       withCredentials: true,
        //     })
        //     .then((res) => {
        //       console.log(res);
        //     });
        // });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  responseGoogle = (res) => {
    console.log(res);
    this.props.history.push("/home");
  };
  failGoogle = (res) => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="Glogin" style={{ margin: 0 }}>
        <Box display="flex" pt={10} justifyContent="center" alignItems="center">
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
          <Button
            variant="contained"
            style={{
              backgroundImage: `url(${google})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: 300,
              height: 50,
              borderRadius: 0,
            }}
            onClick={this.handleGoogleLogin}
          ></Button>
        </Box>

        <Container
          style={{ marginTop: "10px", textAlign: "center", padding: 10 }}
          maxWidth="xs"
        >
          <span
            style={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "Avenir",
              fontSize: "19px",
              fontWeight: 500,
            }}
          >
            By clicking this you are agreeing to Spidy{" "}
            <span style={{ borderBottom: "2px solid rgba(169, 169, 169, 1)" }}>
              TOS and Privacy Policy
            </span>
          </span>
        </Container>
      </div>
    );
  }
}

export default Glogin;
