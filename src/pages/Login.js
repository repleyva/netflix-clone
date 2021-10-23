import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import logo from "../images/netflix-logo.png";
import {
  NetflixButton,
  NetflixInput,
  NetflixButtonStarted,
} from "../styled/StyledComponents";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.fadeTop}></div>
        <div className={classes.header}>
          <img src={logo} alt="logo" className={classes.logo} />
          <NetflixButton
            className={classes.session}
            onClick={() => history.push("/login")}
          >
            Iniciar sesión
          </NetflixButton>
        </div>
        <div className={classes.containInfo}>
          <div className={classes.info}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "630px" }}>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "50px",
                    fontWeight: "bold",
                  }}
                  variant="h1"
                  gutterBottom
                >
                  Películas y series ilimitadas y mucho más.
                </Typography>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "26px",
                    paddingBottom: "10px",
                    fontWeight: "400",
                  }}
                  variant="h2"
                  gutterBottom
                >
                  Disfruta donde quieras. Cancela cuando quieras.
                </Typography>
              </div>
            </div>
            <form className={classes.form}>
              <div className={classes.inputBlock}>
                <Typography
                  style={{
                    fontSize: "19px",
                    paddingBottom: "14px",
                    color: "#fff",
                  }}
                  variant="h3"
                  gutterBottom
                >
                  ¿Quieres ver Netflix ya? Ingresa tu email para crear una
                  cuenta o reiniciar tu membresía de Netflix.
                </Typography>
                <div className={classes.formInput}>
                  <NetflixInput placeholder="Email" width="450px" />
                  <NetflixButtonStarted
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0 25px",
                    }}
                  >
                    Comenzar{" "}
                    <ArrowForwardIosIcon style={{ marginLeft: "10px" }} />
                  </NetflixButtonStarted>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={classes.fadeBottom}></div>
      </div>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    height: "100vh",
    backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/45e6f443-8eff-4c7b-ba24-fbdc84c37718/fe8fbbfe-98e9-4405-aa93-f286caa030d5/CO-es-20210927-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  logo: {
    width: "145px",
    cursor: "pointer",
    marginLeft: 50,
    ["@media (max-width:500px)"]: {
      width: "100px",
      marginLeft: 25,
    },
  },

  session: {
    marginRight: 50,
    ["@media (max-width:500px)"]: {
      marginRight: 25,
			width: "100px !important",
			fontSize: ".7rem !important"
    },
  },

  header: {
    zIndex: 30,
    position: "fixed",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 0 0",
  },

  containInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "80px",
  },

  info: {
    width: "80%",
    color: "#fff",
    margin: "0 auto",
    zIndex: 30,
  },

  form: {
    paddingTop: 13,
    zIndex: 30,
  },

  formInput: {
    display: "flex",
    justifyContent: "center",
  },

  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: "0",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
  },

  fadeTop: {
    position: "absolute",
    top: "0",
    bottom: "30vh",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
  },
})); // importamos el hook

export default Login;
