import { makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    /* backgroundColor: "#111",
    minHeight: "100vh", */
  },
})); // importamos el hook

export default Home;
