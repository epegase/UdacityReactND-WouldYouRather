import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import { fetchPolls } from "../pollsSlice";
import UnansweredPoll from "./UnansweredPoll";
import AnsweredPoll from "./AnsweredPoll";
import { selectAllPolls } from "../pollsSlice";

const PollsList = () => {
  const { TabPane } = Tabs;
  const allPolls = useSelector(selectAllPolls);
  console.log(allPolls);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);

  /* useEffect(() => {
    if (pollStatus === "idle") {
      dispatch(fetchPolls());
    }
  }, [pollStatus, dispatch]); */

  /* const renderedPolls = allPolls.map((poll) => (
    <article key={poll.id}>
      <h3>{poll.id}</h3>
      <Link to={`/questions/${poll.id}`}>View Poll</Link>
    </article>
  )); */
  const renderedPolls = allPolls.map((poll) => (
    <UnansweredPoll key={poll.id} id={poll.id} />
  ));

  function callback(key) {
    console.log(key);
  }

  //const renderedPolls = fetchPolls();

  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="Tab 1" key="1">
        {renderedPolls}
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <AnsweredPoll />
      </TabPane>
    </Tabs>
  );
};

export default PollsList;
