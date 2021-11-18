import React from "react";
import { formatDate } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { selectPollById } from "../polls/pollsSlice";
import { selectUserById } from "../users/usersSlice";
import { Card, Space, Typography, Progress, Divider, Badge } from "antd";
import { selectAuthedUser } from "../authuser/authuserSlice";
import UserAvatar from "../users/Avatar";
import Page404 from "../../pages/Page404";

const AnsweredPoll = ({ id }) => {
  const question = useSelector((state) => selectPollById(state, id));
  const { optionOne, optionTwo, timestamp } = question;
  const authuser = useSelector(selectAuthedUser);
  const user = useSelector((state) => selectUserById(state, authuser));
  const { name, avatarURL } = user;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );
  const { Text } = Typography;

  if (question === null) {
    return <Page404 />;
  }

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={
          <Space>
            <UserAvatar avatarURL={avatarURL} />
            <Text>{name} </Text>
          </Space>
        }
        bordered={true}
        style={{ width: 300 }}
      >
        <ul>
          <li>
            {optionOne.votes.includes(authuser) ? (
              <Badge.Ribbon text="Your choice" color="red"></Badge.Ribbon>
            ) : null}
            {optionOne.text}
          </li>
          <Progress percent={optionOnePercent} />
          <Text>
            chosen by {optionOne.votes.length} out of {totalVotes} users
          </Text>
          <Divider />
          <li>
            {optionTwo.votes.includes(authuser) ? (
              <Badge.Ribbon text="Your choice" color="red"></Badge.Ribbon>
            ) : null}
            {optionTwo.text}
          </li>
          <Progress percent={optionTwoPercent} />
          <Text>
            chosen by {optionTwo.votes.length} out of {totalVotes} users
          </Text>
        </ul>
        <Divider />
        <Space>
          <Text code>{formatDate(timestamp)}</Text>
        </Space>
      </Card>
    </div>
  );
};

export default AnsweredPoll;
