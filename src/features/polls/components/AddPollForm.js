import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { AddNewPoll } from "../pollsSlice";

const AddPollForm = () => {
  const [form] = Form.useForm();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const onOptionOneChanged = (e) => setOptionOne(e.target.value);
  const onOptionTwoChanged = (e) => setOptionTwo(e.target.value);
  const dispatch = useDispatch();
  const onSubmitNewPoll = () => {
    if (optionOne && optionTwo) {
      dispatch(AddNewPoll({ optionOne, optionTwo }));
      setOptionOne("");
      setOptionTwo("");
    }
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
        <Form.Item label="Option One">
          <Input
            placeholder="Enter Option One Text Here"
            value={optionOne}
            onChange={onOptionOneChanged}
          />
        </Form.Item>
        <Form.Item label="Option Two">
          <Input
            placeholder="Enter Option Two Text Here"
            value={optionTwo}
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

export default AddPollForm;
