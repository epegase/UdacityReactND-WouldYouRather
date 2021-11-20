import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout, selectAuthedUser } from "../features/authuser/authuserSlice";
import { selectUserById } from "../features/users/usersSlice";
import { Menu, Affix, Button, Image, Avatar, Typography } from "antd";
import {
  HomeOutlined,
  QuestionCircleOutlined,
  TrophyOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  // connect to store
  const authuser = useSelector(selectAuthedUser);
  const userById = useSelector((state) => selectUserById(state, authuser));
  const dispatch = useDispatch();

  // form state
  const [current, SetCurrent] = useState("");
  const { Text } = Typography;

  // event handlers
  const history = useHistory();
  const handleClick = (e) => {
    SetCurrent(e.key);
  };
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  return (
    <Affix offsetTop={0}>
      <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/homepage">Home</Link>
        </Menu.Item>
        <Menu.Item key="question" icon={<QuestionCircleOutlined />}>
          <Link to="/add">New Question</Link>
        </Menu.Item>
        <Menu.Item key="leaderboard" icon={<TrophyOutlined />}>
          <Link to="/leaderboard">LeaderBoard</Link>
        </Menu.Item>
        {authuser ? (
          <Menu.Item key="logout">
            <Text>{userById.name} </Text>
            <Avatar
              src={<Image src={userById.avatarURL} style={{ width: 32 }} />}
            />
            <Button
              type="primary"
              danger
              onClick={onLogout}
              icon={<LogoutOutlined />}
            >
              Logout
            </Button>
          </Menu.Item>
        ) : (
          <Menu.Item key="login" icon={<LoginOutlined />}>
            <Link to="/">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </Affix>
  );
};

export default Navbar;
