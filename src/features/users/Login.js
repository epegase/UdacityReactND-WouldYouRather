import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Form, Button, Select, Image, Typography } from "antd";
import { selectAllUsers, fetchUsers } from "../users/usersSlice";
import { fetchPolls } from "../polls/pollsSlice";
import { login } from "../authuser/authuserSlice";

const Login = () => {
  // component state
  const [value, setValue] = useState("");
  const [error, SetError] = useState("Please select a username!");

  // load state values
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);
  // ant component destructuring
  const { Title } = Typography;
  const { Option } = Select;

  // event handler functions
  const history = useHistory();
  const { state } = useLocation();

  const handleChange = (e, { value }) => {
    setValue({ value });
  };
  const onSubmit = (e) => {
    const userSelected = value;
    const idAuthuser = userSelected.value;
    e.preventDefault();
    if (idAuthuser !== "") {
      dispatch(login(idAuthuser));
      history.push(state?.from || "/homepage");
      // <Redirect to={state?.from || "/homepage"} />;
    } else {
      SetError("Please, select a user");
    }
  };

  // Login form

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      labelCol={{ span: 4, offset: 2 }}
      wrapperCol={{ span: 8, offset: 2 }}
    >
      <Title>Welcome to the Would You Rather App!</Title>
      <Title level={2}>Please sign in to continue</Title>
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: { error },
          },
        ]}
      >
        <Select
          style={{ width: 240 }}
          onChange={handleChange}
          placeholder="Select User"
        >
          {users.map((user) => (
            <Option value={user.id} key={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={onSubmit}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
