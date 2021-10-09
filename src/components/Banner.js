import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import banner from "../images/netflix.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Banner = () => {
  const classes = useStyles();
  const truncate = (string, n) =>
    string.length > n ? `${string.substr(0, n - 1)}...` : string;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          Movie Title
        </Typography>
      </div>
      <div className={classes.buttons}>
        <Button style={{ backgroundColor: "#e6e6e6", color: "#111" }}>
          <PlayArrowIcon className={classes.icon} /> Reproducir
        </Button>
        <Button>
          <InfoOutlinedIcon className={classes.icon} />
          Más Información
        </Button>
      </div>
      <Typography
        style={{ wordWrap: "break-word" }}
        variant="h6"
        className={classes.description}
      >
        {truncate(
          "Movie Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero eaque ipsam quis assumenda voluptatum ducimus voluptate voluptatibus blanditiis illo dolor, accusamus tenetur provident asperiores ratione ut mollitia eum itaque. Lorem ipsum dolor lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero eaque ipsam quis assumenda voluptatum ducimus voluptate voluptatibus blanditiis illo dolor, accusamus tenetur provident asperiores ratione ut mollitia eum itaque. Lorem ipsum dolor lorem",
          200
        )}
      </Typography>
      <div className={classes.fadeBottom}></div>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${banner})`,
    position: "relative",
    height: "440px",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },

  icon: {
    marginRight: "5px",
  },

  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      backgroundColor: "rgba(51, 51, 51, 0.5)",
      textTransform: "capitalize",
			padding: "4px 15px",
    },

    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },

  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: "0",
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
  },
})); // importamos el hook

export default Banner;
