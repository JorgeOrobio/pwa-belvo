import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import SignIn from './Pages/SignIn'
import { Banks } from "./Pages/Banks";
import Transactions from "./Pages/Transactions";


export default function App(props) {
  const history =useHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" props={props}> <SignIn /></Route>
        <Route exact path="/banks" props={props}> <Banks/> </Route>
        <Route exact path="/transactions" props={props}> <Transactions/> </Route>
      </Switch>
    </Router>
  );
}

