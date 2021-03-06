import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addNewPoll } from "../polls/pollsSlice";
import { selectAuthedUser } from "../authuser/authuserSlice";
import { Form, Input, Button } from "antd";

const NewPollForm = () => {
  // component state (local)
  const [form] = Form.useForm();
  const [optionOneText, setOptionOne] = useState("");
  const [optionTwoText, setOptionTwo] = useState("");
  const onOptionOneChanged = (e) => setOptionOne(e.target.value);
  const onOptionTwoChanged = (e) => setOptionTwo(e.target.value);

  // event handlers

  const dispatch = useDispatch();
  const history = useHistory();
  const author = useSelector(selectAuthedUser);
  const onSubmitNewPoll = (e) => {
    e.preventDefault();
    if (optionOneText && optionTwoText) {
      dispatch(addNewPoll({ optionOneText, optionTwoText, author }));
    }
    setOptionOne("");
    setOptionTwo("");
    history.push("/homepage");
  };
  return (
    <section>
      <h2>Create a New Question</h2>
      <Form
        layout="vertical"
        form={form}
        labelCol={{ span: 4, offset: 2 }}
        wrapperCol={{ span: 8, offset: 2 }}
      >
        <h3>“Would You Rather”</h3>
        <Form.Item label="Option One">
          <Input
            placeholder="Enter Option One Text Here"
            value={optionOneText}
            onChange={onOptionOneChanged}
          />
        </Form.Item>
        <Form.Item label="Option Two">
          <Input
            placeholder="Enter Option Two Text Here"
            value={optionTwoText}
            onChange={onOptionTwoChanged}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onSubmitNewPoll}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default NewPollForm;
