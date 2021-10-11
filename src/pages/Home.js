import { makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import requests from "../helpers/request";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Banner />
      <Row
        title="Originales de Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Mejor Calificada" fetchUrl={requests.fetchTopRated} />
      <Row title="Acción" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedia" fetchUrl={requests.fecthComedyMovies} />
      <Row title="Terror" fetchUrl={requests.fecthHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fecthRomanceMovies} />
      <Row title="Documentales" fetchUrl={requests.fecthDocumentaries} />
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    height: "auto",
  },
})); // importamos el hook

export default Home;
