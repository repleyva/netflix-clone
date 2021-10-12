import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setPrice } from "../features/priceSlice";
import { NetflixButton } from "../styled/StyledComponents";

const Plans = ({ children, color = "red", wide, cost }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
	const history = useHistory()
  const handleClick = (cost) => {
    dispatch(setPrice(cost));
		/* history.push("/checkout"); */
  };
  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{ color: "#fff" }} gutterBottom>
        {children}
        <h6>$ {cost}</h6>
      </Typography>
      <NetflixButton
        wide={wide}
        color={color}
        onClick={() => handleClick(cost)}
      >
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
