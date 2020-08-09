import React, { useState, useEffect } from "react";
//import { Button, Typography } from "@material-ui/core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    setIsSignedIn(true);
  };

  const logout = (response) => {
    setIsSignedIn(false);
    console.log(response);
  };

  const authButton = () => {
    if (isSignedIn) {
      return (
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      );
    } else {
      return (
        <GoogleLogin
          clientId="495710268224-144qr2tk58kkkht6kjdnerps9u7pn859.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      );
    }
  };

  return <div>{authButton()}</div>;
};

export default GoogleAuth;
