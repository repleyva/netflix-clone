import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';

const Wellcome = () => {
	return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/login" component={SignUp} />
            <Route exact path="/" component={Login} />
          </Switch>
      </Router>
    </div>
  );
}

export default Wellcome
