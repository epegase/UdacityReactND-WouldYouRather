import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectAuthedUser } from "../features/authuser/authuserSlice";
import { selectUserById } from "../features/users/usersSlice";
import { selectPollIds } from "../features/polls/pollsSlice";
import UnansweredPoll from "../features/polls/UnansweredPoll";
import AnsweredPoll from "../features/polls/AnsweredPoll";
import Navbar from "../app/Navbar";
import Page404 from "./Page404";

const PollDetails = () => {
  /*  use the `useParams` hook here to access
  the dynamic pieces of the URL. */
  let { question_id } = useParams();

  const PollIds = useSelector(selectPollIds);

  const authuser = useSelector(selectAuthedUser);
  const authuserById = useSelector((state) => selectUserById(state, authuser));

  const answersId = Object.keys(authuserById.answers);
  const answered = answersId.includes(question_id);
  let questionsId = PollIds.filter(function (x) {
    // checking second array does not contain element "x"
    if (answersId.indexOf(x) === -1) return true;
    else return false;
  });
  const unanswered = questionsId.includes(question_id);

  if (answered) {
    return (
      <>
        <Navbar />
        <AnsweredPoll id={question_id} />
      </>
    );
  } else if (unanswered === true) {
    return (
      <>
        <Navbar />
        <UnansweredPoll id={question_id} />
      </>
    );
  }
  return <Page404 />;
};

export default PollDetails;
