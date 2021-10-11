import { makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
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
      <Typography variant="h5" style={{marginBottom: ".5rem"}}>{title}</Typography>
      <div className={classes.posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
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
  },

  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  poster: {
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

	posterLarge: {
		maxHeight: "15rem",
		"&:hover": {
			transform: "scale(1.15)"
		}
	}
})); // importamos el hook

export default Row;
