import React, { useState } from "react";
import { Button, Menu, MenuItem, Avatar } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { useSelector } from "react-redux";

const LogOutMenu = ({ logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const userSignIn = useSelector((state) => state.userSignIn);
  const {
    userInfo: { profileObj },
  } = userSignIn;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} style={{ color: "white" }}>
        {profileObj.givenName}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar alt={profileObj.givenName} src={profileObj.imageUrl} />
        </MenuItem>
        <MenuItem onClick={handleClose}>{profileObj.name}</MenuItem>
        <MenuItem onClick={handleClose} style={{ backgroundColor: "grey" }}>
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LogOutMenu;
