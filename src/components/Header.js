import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import logo from "../images/netflix-logo.png";
import user from "../images/netflix-avatar.png";

const Header = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [scrollY, setscrollY] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const hideHeader = () => {
      setscrollY(window.pageYOffset);
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", hideHeader);
    return () => {
      window.removeEventListener("scroll", hideHeader);
    };
  }, [scrollY]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => history.push("/")}>
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>
        <img
          src={user}
          alt="user"
          style={{ cursor: "pointer", borderRadius: "8px" }}
          onClick={() => history.push("/profile")}
          className={classes.user}
        />
      </Toolbar>
    </AppBar>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },

  transparent: {
    backgroundColor: "transparent",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: "100px",
    cursor: "pointer",
  },

  user: {
		width: "40px",
	}
})); // importamos el hook

export default Header;
