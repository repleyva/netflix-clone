import { makeStyles } from '@material-ui/core';
import React from 'react'

const Paypal = () => {
  const classes = useStyles();

	return (
		<div>
			<h2>Paypal</h2>
		</div>
	)
}

// inicializamos los valores del theme
const useStyles = makeStyles((theme) => ({
  root: {
    /* backgroundColor: "#111",
    minHeight: "100vh", */
  },
})); // importamos el hook

export default Paypal
