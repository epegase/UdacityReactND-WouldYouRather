import React from "react";
import Navbar from "../app/Navbar";
import AddPollForm from "../features/polls/components/AddPollForm";

const NewPoll = () => {
  return (
    <div>
      <Navbar />
      <AddPollForm />
    </div>
  );
};

export default NewPoll;
