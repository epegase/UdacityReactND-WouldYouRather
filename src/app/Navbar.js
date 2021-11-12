import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Affix, Button, Image, Avatar, Typography } from "antd";
import {
  HomeOutlined,
  QuestionCircleOutlined,
  TrophyOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthedUser } from "../features/authuser/authuserSlice";
import { useHistory } from "react-router-dom";
import { selectUserById } from "../features/users/usersSlice";

const Navbar = () => {
  const [current, SetCurrent] = useState("home");
  const handleClick = (e) => {
    SetCurrent(e.key);
  };
  const authuser = useSelector(selectAuthedUser);
  const userById = useSelector((state) => selectUserById(state, authuser));
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };
  const { Text } = Typography;
  return (
    <Affix offsetTop={0}>
      <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
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
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </Affix>
  );
};

export default Navbar;
