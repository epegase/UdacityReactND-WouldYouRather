import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolls, selectAllPolls } from "../pollsSlice";
import UansweredPoll from "./UnansweredPoll";

const ListofUnansweredPolls = () => {
  const allPolls = useSelector(selectAllPolls);
  console.log(allPolls);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);

  const renderedUnansweredPolls = allPolls.map((poll) => (
    <UansweredPoll id={poll.id} />
  ));

  return <div>{renderedUnansweredPolls}</div>;
};

export default ListofUnansweredPolls;
