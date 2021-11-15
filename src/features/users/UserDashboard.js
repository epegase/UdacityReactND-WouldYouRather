import React from "react";
import { Card, Typography, Space, Divider } from "antd";
import UserAvatar from "../users/Avatar";
import { selectUserById } from "./usersSlice";
import { useSelector } from "react-redux";

const UserDashboard = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, id));
  const { name, avatarURL, answers, questions } = user;
  const { Text } = Typography;
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={
          <Space>
            <UserAvatar avatarURL={avatarURL} />
            <Text>{name}</Text>
          </Space>
        }
        bordered={false}
        style={{ width: 300 }}
      >
        <Text>Answered Questions: {Object.keys(answers).length}</Text>
        <Divider />
        <Text>Created Questions: {questions.length}</Text>
        <Divider />
        <Text>Score: {Object.keys(answers).length + questions.length}</Text>
      </Card>
    </div>
  );
};

export default UserDashboard;
