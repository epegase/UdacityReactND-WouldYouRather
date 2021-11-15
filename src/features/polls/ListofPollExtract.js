import React from "react";
import { Typography } from "antd";
import PollExtract from "./PollExtract";

const ListofPollExtract = ({ idsList, emptyListNote }) => {
  const { Text } = Typography;
  return (
    <>
      {idsList.length ? (
        idsList.map((id) => <PollExtract key={id} id={id} />)
      ) : (
        <Text level={2}>{emptyListNote}</Text>
      )}
    </>
  );
};

export default ListofPollExtract;
