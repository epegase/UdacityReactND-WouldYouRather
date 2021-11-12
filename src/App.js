import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import PollDetails from "./pages/PollDetails";
import NewPoll from "./pages/NewPoll";
import LeaderboardPage from "./pages/LeaderBoardPage";
import LoginPage from "./pages/LoginPage";
import { fetchPolls } from "./features/polls/pollsSlice";
import { fetchUsers } from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  /*  if user not authenticated, render the login 
 component, otherwise, render the home*/
  // const authedUser = useSelector((state) => state.authusers);

  // When app mount, charge all polls in state
  const dispatch = useDispatch();

  const pollStatus = useSelector((state) => state.polls.status);
  useEffect(() => {
    if (pollStatus === "loading") {
      dispatch(fetchPolls());
    }
  }, [pollStatus, dispatch]);

  // Charge all users in state
  const userStatus = useSelector((state) => state.users.status);
  useEffect(() => {
    if (userStatus === "loading") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/add">
          <NewPoll />
        </Route>
        <Route exact path="/leaderboard">
          <LeaderboardPage />
        </Route>
        <Route exact path="/questions/:question_id">
          <PollDetails />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
