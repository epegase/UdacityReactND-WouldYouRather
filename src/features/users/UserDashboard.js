import React from "react";
import { Card, Typography, Space, Divider, Statistic, Row, Col } from "antd";
import UserAvatar from "../users/Avatar";
import { selectUserById } from "./usersSlice";
import { useSelector } from "react-redux";

const UserDashboard = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, id));
  const { name, avatarURL, answers, questions } = user;
  const answerCount = Object.keys(answers).length;
  const questionCount = questions.length;
  const score = Object.keys(answers).length + questions.length;
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
        offset={4}
      >
        <Row>
          <Col span={16}>
            <Text>Answered Questions: {answerCount} </Text>
            <Divider />
            <Text>Created Questions: {questionCount}</Text>
            <Divider />
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="SCORE:"
                value={score}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default UserDashboard;
