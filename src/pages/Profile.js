import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import Plans from "../components/Plans";
import { auth } from "../helpers/firebase";
import netflixAvatar from "../images/netflix-avatar.png";
import { NetflixButton } from "../styled/StyledComponents";

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const signout = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Header />
      <Typography
        variant="h3"
        style={{ fontWeight: "bold", marginBottom: "1rem" }}
      >
        Edita tu Perfil
      </Typography>
      <div className={classes.body}>
        <div className={classes.info}>
          <img src={netflixAvatar} alt="avatar" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography
                variant="h6"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "rgba(51, 51, 51, 0.5)",
                  padding: ".5rem",
                  marginBottom: ".5rem",
                  fontSize: "18px",
                }}
              >
                rusvelpassos@gmail.com
              </Typography>
              <Typography variant="h5" gutterBottom>
                Planes
              </Typography>
              <Plans cost={16900}>Netflix Standar</Plans>
              <Plans cost={26900}>Netflix Basic</Plans>
              <Plans cost={38900} color="gray" wide="middlewidth">
                Netflix Premium
              </Plans>
              <NetflixButton onClick={signout} wide="fullwidth">
                Cerrar sesión
              </NetflixButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#111",
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  info: {
    width: "100%",
    display: "flex",

    "& img": {
      height: "100px",
      borderRadius: "8px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
  },

  plans: {
    width: "100%",
    "& h5": {
      borderBottom: "1px solid lightgray",
    },
  },
})); // importamos el hook

export default Profile;
