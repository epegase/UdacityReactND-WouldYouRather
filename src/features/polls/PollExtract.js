import React from "react";
import { Card, Radio, Space, Button, Typography } from "antd";
import UserAvatar from "../users/Avatar";
import { formatDate } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPollById } from "./pollsSlice";
import { selectAllUsers, selectUserById } from "../users/usersSlice";
import { selectAuthedUser } from "../authuser/authuserSlice";

const PollExtract = ({ id }) => {
  const question = useSelector((state) => selectPollById(state, id));
  const { optionOne, timestamp } = question;
  //const users = useSelector(selectAllUsers);
  //const user = users[question.author];
  const authuser = useSelector(selectAuthedUser);
  const authuserById = useSelector((state) => selectUserById(state, authuser));
  const { name, avatarURL } = authuserById;
  const { Text } = Typography;
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={
          <Space>
            <UserAvatar avatarURL={avatarURL} />
            <Text>{name} ask : </Text>
          </Space>
        }
        bordered={true}
        style={{ width: 300 }}
      >
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={"optionOne"}>{optionOne.text.slice(0, 40)}...?</Radio>
            <Button type="primary">
              <Link to={`/questions/${id}`}>View Poll</Link>
            </Button>
          </Space>
        </Radio.Group>
        <Space>
          <Text code>{formatDate(timestamp)}</Text>
        </Space>
      </Card>
    </div>
  );
};

export default PollExtract;
