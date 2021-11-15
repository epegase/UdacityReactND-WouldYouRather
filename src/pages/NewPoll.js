import React from "react";
import Navbar from "../app/Navbar";
import NewPollForm from "../features/polls/NewPollForm";

const NewPoll = () => {
  return (
    <div>
      <Navbar />
      <NewPollForm />
    </div>
  );
};

export default NewPoll;
