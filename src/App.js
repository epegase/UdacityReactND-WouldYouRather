import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./features/authuser/PrivateRoute";
import HomePage from "./pages/HomePage";
import PollDetails from "./pages/PollDetails";
import NewPoll from "./pages/NewPoll";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <PrivateRoute path="/homepage">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/add">
          <NewPoll />
        </PrivateRoute>
        <PrivateRoute path="/leaderboard">
          <LeaderBoardPage />
        </PrivateRoute>
        <Switch>
          <PrivateRoute path="/questions/:question_id">
            <PollDetails />
          </PrivateRoute>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
