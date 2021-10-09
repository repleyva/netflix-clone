import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";
import Wellcome from "./pages/Wellcome";

function App() {
  const user = null; // usuario de netflix
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        {!user ? (
          <Wellcome />
        ) : (
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/checkout" component={Paypal} />
            <Route exact path="/" component={Home} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    /* backgroundColor: "#000", */
    /* minHeight: "100vh", */
  },
})); // importamos el hook

export default App;
