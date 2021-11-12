import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectAllUsers } from "../users/usersSlice";
import { Form, Button, Select, Image, Typography } from "antd";
import { login } from "./authuserSlice";
import { useHistory } from "react-router-dom";

/* 
- display a dropdown of users
- enable submit when a user is selected
- pass the user to the nav component for display
*/

const LoginForm = () => {
  // <UserOutlined />;
  const { Title } = Typography;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { Option } = Select;
  const [value, setValue] = useState("");
  const [error, SetError] = useState("Please select a username!");
  const AllUsers = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = (e, { value }) => {
    setValue({ value });
  };

  /* function handleChange(value) {
    console.log(`selected ${value}`);
  } */

  const onSubmit = (e) => {
    const userSelected = value;
    const idAuthuser = userSelected.value;
    console.log(idAuthuser);
    e.preventDefault();
    if (idAuthuser !== "") {
      dispatch(login(idAuthuser));
      history.push("/");
    } else {
      SetError("Please, select a user");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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
          {AllUsers.map((user) => (
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

export default LoginForm;
