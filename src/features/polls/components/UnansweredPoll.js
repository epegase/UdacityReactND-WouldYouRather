import React, { useState } from "react";
import { Card, Radio, Space, Button, Typography, Avatar, Image } from "antd";
import { useSelector } from "react-redux";
import { selectPollById } from "../pollsSlice";
import { formatDate } from "../../../utils/helpers";
import { selectAuthedUser } from "../../authuser/authuserSlice";
import { selectUserById } from "../../users/usersSlice";

const UansweredPoll = ({ id }) => {
  const { Text } = Typography;
  const pollId = useSelector((state) => selectPollById(state, id));
  const { optionOne, optionTwo, timestamp } = pollId;

  const authuser = useSelector(selectAuthedUser);
  const user = useSelector((state) => selectUserById(state, authuser));
  const { name, avatarURL } = user;

  const [value, setValue] = useState("OptionOne");
  const OptionSelected = (e) => {
    return setValue(e.target.value);
  };
  return (
    <div className="site-card-border-less-wrapper">
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
        <p>Would You Rather</p>
        <Radio.Group onChange={OptionSelected} value={value}>
          <Space direction="vertical">
            <Radio value={"OptionOne"}>{optionOne.text}</Radio>
            <Radio value={"OptionTwo"}>{optionTwo.text}</Radio>
            <Button type="primary">Vote</Button>
          </Space>
        </Radio.Group>
        <Text code>{formatDate(timestamp)}</Text>
      </Card>
    </div>
  );
};

export default UansweredPoll;
