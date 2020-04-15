import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
class Logout extends Component {
  logout = () => {
    console.log("log out ho rha hae");
    this.props.history.push("/");
  };

  render() {
    return (
      <GoogleLogout
        clientId="592790702111-fcc24gegsbhvk9kted69dnhjpc1uijdf.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={this.logout}
      ></GoogleLogout>
    );
  }
}

export default withRouter(Logout);
