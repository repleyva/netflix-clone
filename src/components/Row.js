import { makeStyles, Typography } from "@material-ui/core";
import { memo, useEffect, useState } from "react";
import { helpHttps } from "../helpers/helpHttps";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  let api = helpHttps();

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.get(fetchUrl);
      console.log(request);
      setMovies(request.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]); // cuando search cambie entonces se ejecuta el efecto

  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ marginBottom: ".5rem" }}>
        {title}
      </Typography>
      <div className={classes.posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className={classes.movieContent}>
                <img
                  className={`${classes.poster} ${
                    isLargeRow && classes.posterLarge
                  }`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie?.backdrop_path
                  }`}
                  alt={movie?.name}
                />
                <h3 className={classes.titleMovie} style={{width: "80%"}}>
                  {movie.name || movie.title}
                </h3>
              </div>
            )
        )}
      </div>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    margin: "0 3rem",
    paddingBottom: "2rem",
    overflowX: "hidden",
  },

  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    boxSizing: "border-box",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#444",
      borderRadius: "20px",
      transition: ".5s",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
      boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.2)",
    },

    "& img:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#111",
      opacity: "0.2",
      zIndex: "0",
    },

    "& h3:hover": {
      zIndex: "4",
    },
  },

  movieContent: {
    zIndex: "1",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    color: "white",
    position: "relative",
    transition: "all 0.5s ease",
    cursor: "pointer",
  },

  poster: {
    zIndex: "2",
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 200ms",
  },

  posterLarge: {
    zIndex: "2",
    maxHeight: "15rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 200ms",
  },

  titleMovie: {
    zIndex: "1",
    position: "absolute",
    textAlign: "center", // centrar
  },
})); // importamos el hook

export default memo(Row);
