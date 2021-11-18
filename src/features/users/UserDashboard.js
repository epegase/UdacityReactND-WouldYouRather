import React from "react";
import { Card, Typography, Space, Divider, Statistic, Row, Col } from "antd";
import UserAvatar from "../users/Avatar";

const UserDashboard = ({
  name,
  avatarURL,
  answerCount,
  questionCount,
  score,
}) => {
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
