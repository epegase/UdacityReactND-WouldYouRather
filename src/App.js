import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PollDetails from "./pages/PollDetails";
import NewPoll from "./pages/NewPoll";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import { PrivateRoute } from "./features/authuser/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <PrivateRoute exact path="/homepage">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute exact path="/add">
          <NewPoll />
        </PrivateRoute>
        <PrivateRoute exact path="/leaderboard">
          <LeaderBoardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/questions/:question_id">
          <PollDetails />
        </PrivateRoute>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
