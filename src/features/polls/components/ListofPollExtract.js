import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "antd";
import { fetchPolls, selectAllPolls } from "../pollsSlice";
import PollExtract from "./PollExtract";

const ListofPollExtract = () => {
  const allPolls = useSelector(selectAllPolls);
  console.log(allPolls);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);
  // const { TabPane } = Tabs;

  const { Text } = Typography;
  const renderedPolls = allPolls.map((poll) => (
    <PollExtract key={poll.id} id={poll.id} userId={poll.author} />
  ));

  return (
    <>
      <Text level={2}>Would You Rather...</Text>
      {renderedPolls}
    </>
  );
};

export default ListofPollExtract;
