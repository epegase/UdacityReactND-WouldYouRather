import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import PollDetails from "./pages/PollDetails";
import NewPoll from "./pages/NewPoll";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/add">
          <NewPoll />
        </Route>
        <Route exact path="/leaderboard">
          <LeaderBoardPage />
        </Route>
        <Route exact path="/questions/:question_id">
          <PollDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
