import React from "react";
import { formatDate } from "../../../utils/helpers";
import { useSelector } from "react-redux";
import { selectPollById } from "../pollsSlice";
import { selectUserById } from "../../users/usersSlice";
import { Card, Space, Typography, Avatar, Image, Progress } from "antd";
import { selectAuthedUser } from "../../authuser/authuserSlice";

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
  return (
    <div>
      <Card
        title={
          <Space>
            <Avatar src={<Image src={avatarURL} style={{ width: 32 }} />} />
            <Text>{name} ask : </Text>
          </Space>
        }
        bordered={true}
        style={{ width: 300 }}
      >
        <ul>
          <li>
            {optionOne.text}
            {optionOne.votes.includes(user) ? (
              <span>&lt;- Your choice</span>
            ) : null}
          </li>
          <Progress percent={optionOnePercent} />
          <Text>
            chosen by {optionOne.votes.length} out of {totalVotes} users
          </Text>
          <li>
            {optionTwo.text}
            {optionTwo.votes.includes(user) ? (
              <span>&lt;- Your choice</span>
            ) : null}
          </li>
          <Progress percent={optionTwoPercent} />
          <Text>
            chosen by {optionTwo.votes.length} out of {totalVotes} users
          </Text>
        </ul>
        <Space>
          <Text code>{formatDate(timestamp)}</Text>
        </Space>
      </Card>
    </div>
  );
};

export default AnsweredPoll;
