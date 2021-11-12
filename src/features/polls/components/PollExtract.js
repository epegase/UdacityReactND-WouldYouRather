import React, { useState } from "react";
import { Card, Radio, Space, Button, Typography, Avatar, Image } from "antd";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/helpers";
import { useSelector } from "react-redux";
import { selectPollById } from "../pollsSlice";
import { selectUserById } from "../../users/usersSlice";
/* import { useSelector } from "react-redux";
import { selectUserById } from "../../../features/users/usersSlice";
import { selectAuthedUser } from "../../../features/authuser/authuserSlice"; */

const PollExtract = ({ id, userId }) => {
  const question = useSelector((state) => selectPollById(state, id));
  const { optionOne, timestamp } = question;
  const user = useSelector((state) => selectUserById(state, userId));
  const { name, avatarURL } = user;
  const [value, setValue] = useState("optionOne");
  const OptionSelected = (e) => {
    return setValue(e.target.value);
  };
  const { Text } = Typography;
  /* const authuser = useSelector(selectAuthedUser);
  const userById = useSelector((state) => selectUserById(state, authuser)); */
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
        <Radio.Group onChange={OptionSelected} value={value}>
          <Space direction="vertical">
            <Radio value={"optionOne"}>{optionOne.text.slice(0, 60)}...?</Radio>
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
