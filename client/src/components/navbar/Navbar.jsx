import React from "react";
import { useStyles } from "./style";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.nav}>
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          to="/"
        >
          Twitch Stream
        </Typography>
        <div className={classes.login}>
          <Button color="inherit" component={Link} to="/">
            All Streams
          </Button>
          <GoogleAuth />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
