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
      <Typography variant="h4">{title}</Typography>
      <div className={classes.posters}></div>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
})); // importamos el hook

export default Row;
