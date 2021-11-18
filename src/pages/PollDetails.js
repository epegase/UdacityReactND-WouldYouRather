import React from "react";
import Navbar from "../app/Navbar";
import UansweredPoll from "../features/polls/UnansweredPoll";
import AnsweredPoll from "../features/polls/AnsweredPoll";
import { useParams } from "react-router";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { selectAuthedUser } from "../features/authuser/authuserSlice";
import { selectUserById } from "../features/users/usersSlice";
import { selectPollIds } from "../features/polls/pollsSlice";
import Page404 from "./Page404";

const PollDetails = () => {
  /*  use the `useParams` hook here to access
  the dynamic pieces of the URL. */
  let question_id = useParams();
  let id = Object.values(question_id);
  const authuser = useSelector(selectAuthedUser);
  const authuserById = useSelector((state) => selectUserById(state, authuser));
  const authuserAnswers = authuserById.answers.hasOwnProperty(id)
    ? true
    : false;
  const { Text } = Typography;

  const pollIDs = useSelector(selectPollIds);
  if (!pollIDs.includes(id)) {
    return <Page404 />;
  }

  return (
    <>
      <Navbar />
      <Text>Would You Rather...</Text>
      {authuserAnswers ? <AnsweredPoll id={id} /> : <UansweredPoll id={id} />}
    </>
  );
};

export default PollDetails;
