import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./helpers/firebase";
import Home from "./pages/Home";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";
import Wellcome from "./pages/Wellcome";

function App() {
  const user = useSelector(selectUser); // usuario de netflix
  const [isLogin, setIsLogin] = useState(user);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // si hay un cambio en el usuario en firebase
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        setIsLogin(true);
      } else {
        dispatch(logout);
        setIsLogin(false);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Router>
        {!isLogin ? (
          <Wellcome/>
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
