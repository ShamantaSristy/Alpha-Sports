import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Container className="homeBg" fluid>
            <h1> <FontAwesomeIcon icon={faFutbol} />  Alpha Sports League</h1>
      </Container>

      <Container className="main-container" fluid>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/league/:idLeague">
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
