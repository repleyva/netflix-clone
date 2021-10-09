import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NetflixButton } from "../styled/StyledComponents";

const Plans = ({ children, color = "red", wide }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{ color: "#fff" }} gutterBottom>
        {children}
      </Typography>
      <NetflixButton wide={wide} color={color}>
        Subscribir
      </NetflixButton>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem",
  },
})); // importamos el hook

export default Plans;
