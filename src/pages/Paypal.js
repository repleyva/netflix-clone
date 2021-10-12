import { makeStyles } from "@material-ui/core";
import React, { /* useEffect, useRef */ } from "react";
/* import { useSelector } from "react-redux";
import { selectPrice } from "../features/priceSlice"; */

const Paypal = () => {
  const classes = useStyles();
  /* const paypal = useRef();
  const price = useSelector(selectPrice);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            pruchase_units: [
              {
                description: "Netflix Subscription",
                amount: {
                  currency_code: "COP",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
        },
        onError: (err) => console.log(err),
      })
      .render(paypal.current);
  }, []); */

  return (
    <div className={classes.root}>
      {/* <div className={classes.container}>
        <div ref={paypal} className={classes.paypal}></div>
      </div> */}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  /* root: {
    backgroundColor: "#111",
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
  },

  container: {
    width: "70%",
    margin: "0 auto",
  }, */
}));

export default Paypal;
