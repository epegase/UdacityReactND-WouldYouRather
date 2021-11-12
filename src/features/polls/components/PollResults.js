import React from "react";
import { useSelector } from "react-redux";
import { selectAuthedUser } from "../../authuser/authuserSlice";
import { selectAllUsers } from "../../users/usersSlice";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

const PollResults = () => {
  const users = useSelector(selectAllUsers);
  const auther = useSelector(selectAuthedUser);

  return <div>PollResults</div>;
};

export default PollResults;
