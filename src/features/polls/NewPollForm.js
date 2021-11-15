import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addNewPoll } from "../polls/pollsSlice";
import { selectAuthedUser } from "../authuser/authuserSlice";

const NewPollForm = () => {
  // component state (local)
  const [form] = Form.useForm();
  const [optionOneText, setOptionOne] = useState("");
  const [optionTwoText, setOptionTwo] = useState("");
  const onOptionOneChanged = (e) => setOptionOne(e.target.value);
  const onOptionTwoChanged = (e) => setOptionTwo(e.target.value);

  // event handlers

  const dispatch = useDispatch();
  const author = useSelector(selectAuthedUser);
  const onSubmitNewPoll = (e) => {
    e.preventDefault();
    if (optionOneText && optionTwoText) {
      dispatch(addNewPoll({ optionOneText, optionTwoText, author }));
    }
    setOptionOne("");
    setOptionTwo("");
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
