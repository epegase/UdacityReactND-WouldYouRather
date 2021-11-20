import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectAuthedUser } from "../authuser/authuserSlice";
import { selectUserById } from "../users/usersSlice";
import { selectPollById, savePollAnswer } from "../polls/pollsSlice";
import { Card, Radio, Space, Button, Typography } from "antd";
import { formatDate } from "../../utils/helpers";
import UserAvatar from "../users/Avatar";
import Page404 from "../../pages/Page404";

const UnansweredPoll = ({ id }) => {
  const { Text } = Typography;
  const pollId = useSelector((state) => selectPollById(state, id));
  const authuser = useSelector(selectAuthedUser);
  const { optionOne, optionTwo, timestamp } = pollId;
  const user = useSelector((state) => selectUserById(state, authuser));

  const { name, avatarURL } = user;

  const [value, setValue] = useState("OptionOne");
  const OptionSelected = (e) => {
    return setValue(e.target.value);
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const answer = value;
  const handleVote = () => {
    if (answer !== "") {
      dispatch(savePollAnswer({ authedUser: authuser, qid: id, answer }));
    }
    history.push("/homepage");
  };

  if (pollId === null) {
    return <Page404 />;
  }
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
        <p>Would You Rather</p>
        <Radio.Group onChange={OptionSelected} value={value}>
          <Space direction="vertical">
            <Radio value={"optionOne"}>{optionOne.text}</Radio>
            <Radio value={"optionTwo"}>{optionTwo.text}</Radio>
            <Button type="primary" onClick={handleVote}>
              Vote
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

export default UnansweredPoll;
