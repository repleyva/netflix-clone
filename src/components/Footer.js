import React from "react";
import { makeStyles } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.footerTop}>
        <p className={classes.footerTitle}>
          ¿Preguntas? Llama al{" "}
          <a  href="tel:01 800 917 1564">
            01 800 917 1564
          </a>
        </p>
        <ul className={classes.footerBottom}>
          <li>
            <a href="https://help.netflix.com/support/412">
              <span>Preguntas frecuentes</span>
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com">
              <span>Centro de ayuda</span>
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/termsofuse">
              <span>Términos de uso</span>
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/privacy">
              <span>Privacidad</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_cookies_separate_link_item"
          >
            <a href="#">
              <span>Preferencias de cookies</span>
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/corpinfo">
              <span>Información corporativa</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "30",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#757575",
    padding: "20px 0",
    paddingBottom: "98px",

    "& p": {
      fontSize: "16px",
    },

    "& a": {
      textDecoration: "none",
      color: "#757575",
      fontSize: "13px",
      cursor: "pointer",
    },

    "& a:hover": {
      textDecoration: "underline"
    },

    "& ul": {
      listStyle: "none",
    },
  },

  footerTitle: {
    marginLeft: "40px",
    marginBottom: "30px",
  },

  footerTop: {
    width: "80%",
    margin: "0 auto",
  },

  footerBottom: {
    display: "block",
    listStyleType: "disc",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "40px",

    "& li": {
      boxSizing: "border-box",
      padding: 0,
      marginBottom: "16px",
      display: "inline-block",
      minWidth: "100px",
      width: "25%",
      paddingRight: "12px",
      verticalAlign: "top",
    },
  },
}));

export default Footer;
