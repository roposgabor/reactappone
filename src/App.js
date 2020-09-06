import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./componenet/Dashboard/Dashboard";
import Header from "./componenet/header/Header";
import SignUp from "./componenet/login/SingUp";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Header/>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact>
            <Dashboard/>
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
