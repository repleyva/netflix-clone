import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { memo, useEffect, useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { helpHttps } from "../helpers/helpHttps";
import requests from "../helpers/request";

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);
  const truncate = (string, n) =>
    string.length > n ? `${string.substr(0, n - 1)}...` : string;
  let api = helpHttps();
  let bannerUrl = requests.fetchNetflixOriginals;

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.get(bannerUrl);
      const random = Math.floor(Math.random() * request.results.length - 1);
      // console.log(request.results[random]);
      setMovie(request.results[random]);
      return request;
    };
    fetchData();
  }, []); // cuando search cambie entonces se ejecuta el efecto

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className={classes.fadeTop}></div>
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography variant="h2" component="h1">
            {movie.title || movie.name || movie.original_name}
          </Typography>
        </div>
        <div className={classes.buttons}>
          <Button style={{ backgroundColor: "#e6e6e6", color: "#111" }}>
            <PlayArrowIcon className={classes.icon} /> Reproducir
          </Button>
          <Button style={{ marginLeft: ".7rem" }}>
            <InfoOutlinedIcon className={classes.icon} />
            Más Información
          </Button>
        </div>
        <Typography variant="h7" className={classes.description}>
          {truncate(`${movie.overview}`, 200)}
        </Typography>
      </div>
      <div className={classes.fadeBottom}></div>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "440px",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },

  container: {
    position: "absolute",
    width: "40%",
    bottom: "50px",
    marginLeft: "3rem",
  },

  title: { position: "relative", zIndex: "30", marginBottom: ".5rem" },

  icon: {
    marginRight: "5px",
  },

  description: {
    position: "relative",
    wordWrap: "break-word",
    zIndex: "30",
    textAlign: "justify",
    lineHeight: 1.2,
  },

  buttons: {
    marginBottom: "1.5rem",
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      backgroundColor: "rgba(51, 51, 51, 0.5)",
      textTransform: "capitalize",
      padding: "4px 15px",
      zIndex: "30",
    },

    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },

  fadeBottom: {
    position: "absolute",
    top: "10vh",
    bottom: "0",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.3), #111)",
  },

  fadeTop: {
    position: "absolute",
    top: "0",
    bottom: "10vh",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(0deg, transparent, rgba(37, 37, 37, 0.3), rgba(37, 37, 37, 0.3))",
  },
})); // importamos el hook

export default memo(Banner);
