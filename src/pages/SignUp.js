import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "../components/Footer";
import logo from "../images/netflix-logo.png";
import { NetflixInput, NetflixButton } from "../styled/StyledComponents";
import { useHistory } from "react-router";
import { auth } from "../helpers/firebase";

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
		e.preventDefault();
		auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error.message));
	};

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.root}>
      <div className={classes.fadeTop}></div>
      <div className={classes.header}>
        <img
          src={logo}
          alt="logo"
          className={classes.logo}
          onClick={() => history.push("/")}
        />
      </div>
      <div className={classes.loginBody}>
        <div className={classes.loginContent}>
          <div className={classes.loginForm}>
            <h1>Inicia sesión</h1>
            <form>
              <NetflixInput
                className={classes.input}
                padding="16px 20px"
                borderRadius="4px"
                bgColor="#333333"
                width="100%"
                placeholder="Email o número de teléfono"
                value={email}
								type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <NetflixInput
                className={classes.input}
                padding="16px 20px"
                borderRadius="4px"
                bgColor="#333333"
                width="100%"
                placeholder="Contraseña"
                value={password}
								type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <NetflixButton
                onClick={signIn}
                type="submit"
                className={classes.submitButton}
                wide="fullwidth"
              >
                Iniciar sesión
              </NetflixButton>
              <div className={classes.formHelp}>
                <div className={classes.loginRemember}>
                  <input
                    className={classes.loginCheck}
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                  />
                  <label
                    htmlFor="rememberme"
                    style={{ marginLeft: "5px", fontSize: "13px" }}
                  >
                    <span>Recuérdame</span>
                  </label>
                </div>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "inherit",
                  }}
                >
                  <a
                    href=""
                    style={{
                      fontSize: "13px",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    ¿Necesitas ayuda?
                  </a>
                </button>
              </div>
            </form>
          </div>
          <div className={classes.loginFormOther}>
            <form className={classes.loginFormFacebook}>
              <div className={classes.loginFacebook}>
                <img
                  style={{ width: "20px", marginRight: "10px" }}
                  src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                  alt="facebook"
                />
                <span style={{ fontSize: "13px", color: "#737373" }}>
                  Iniciar sesión con facebook
                </span>
              </div>
            </form>
            <div className={classes.signupNow}>
              ¿Primera vez en Netflix?{" "}
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "16px",
                }}
              >
                <span onClick={signUp}>Suscríbete ya.</span>
              </button>
            </div>
            <div className={classes.terms}>
              <p>
                <span>
                  Esta página está protegida por Google reCAPTCHA para comprobar
                  que no eres un robot.
                </span>
                <button>Más info.</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className={classes.fadeBottom}></div>
    </div>
  );
};

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    height: "100%",
    backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/45e6f443-8eff-4c7b-ba24-fbdc84c37718/fe8fbbfe-98e9-4405-aa93-f286caa030d5/CO-es-20210927-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    objectFit: "cover",
    flexDirection: "column",
  },

  header: {
    zIndex: 30,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0 0",
  },

  logo: {
    width: "180px",
    cursor: "pointer",
    marginLeft: 33,
  },

  loginBody: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    marginBottom: "90px",
  },

  loginContent: {
    display: "flex",
    zIndex: "30",
    width: "450px",
    height: "660px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flexDirection: "column",
    borderRadius: "4px",
  },

  loginForm: {
    padding: "55px 68px 0",
    margin: "0 0 47px",

    "& h1": {
      marginBottom: "28px",
    },
  },

  input: {
    marginBottom: "16px",
    height: "50px",
    color: "#fff",
    fontWeight: 300,
  },

  submitButton: {
    height: "48px",
    marginTop: "24px",
    marginBottom: "12px",
    fontWeight: "bold",
  },

  formHelp: {
    display: "flex",
    justifyContent: "space-between",
    color: "#b3b3b3",

    "& button:hover": {
      textDecoration: "underline",
    },
  },

  loginRemember: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  loginFormOther: {
    margin: "0 68px",
  },

  loginFacebook: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    cursor: "pointer",
  },

  signupNow: {
    fontSize: "16px",
    color: "#737373",
    marginTop: "16px",

    "& span": {
      color: "#fff",
      cursor: "pointer",
    },

    "& button:hover": {
      textDecoration: "underline",
    },

    "& button span:hover": {
      textDecoration: "underline",
    },
  },

  terms: {
    marginTop: "11px",
    color: "#8c8c8c",
    fontSize: "13px",

    "& button": {
      backgroundColor: "transparent",
      border: "none",
      color: "#0071eb",
    },

    "& button:hover": {
      textDecoration: "underline",
    },
  },

  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: "0",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
  },

  fadeTop: {
    position: "absolute",
    top: "0",
    bottom: "30vh",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
  },
})); // importamos el hook

export default SignUp;
