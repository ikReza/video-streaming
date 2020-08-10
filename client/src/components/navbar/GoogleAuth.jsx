import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { signIn, signOut } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import LogOutMenu from "./LogOutMenu";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  useEffect(() => {
    if (userInfo) {
      setIsSignedIn(true);
    }
    return () => {};
  }, [userInfo]);

  const responseGoogle = (response) => {
    dispatch(signIn(response));
    setIsSignedIn(true);
  };

  const responseError = (response) => {
    dispatch(signIn(response));
    setIsSignedIn(false);
  };

  const logout = () => {
    setIsSignedIn(false);
    dispatch(signOut());
  };

  const authButton = () => {
    if (isSignedIn && userInfo.profileObj) {
      return <LogOutMenu logout={logout} />;
    } else {
      return (
        <GoogleLogin
          clientId="495710268224-144qr2tk58kkkht6kjdnerps9u7pn859.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseError}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      );
    }
  };

  return <div>{authButton()}</div>;
};

export default GoogleAuth;
