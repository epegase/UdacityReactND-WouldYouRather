import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Radio, Space, Button, Typography } from "antd";
import { formatDate } from "../../utils/helpers";
import { selectPollById } from "./pollsSlice";
import { selectUserById } from "../users/usersSlice";
import { selectAuthedUser } from "../authuser/authuserSlice";
import UserAvatar from "../users/Avatar";

const PollExtract = ({ id }) => {
  const question = useSelector((state) => selectPollById(state, id));
  const { optionOne, timestamp } = question;
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
        <Text level={2}>Would You Rather...</Text>
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
