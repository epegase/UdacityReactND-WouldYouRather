import React from "react";
import Navbar from "../app/Navbar";
import { Layout, Tabs } from "antd";
import { useSelector } from "react-redux";
import { selectAllPolls } from "../features/polls/pollsSlice";
import ListofPollExtract from "../features/polls/components/ListofPollExtract";
import Users from "../features/users/Users";
import {
  selectAllUsers,
  fetchUsers,
  selectUserById,
} from "../features/users/usersSlice";
import { selectAuthedUser } from "../features/authuser/authuserSlice";
const { Header, Footer, Content } = Layout;

const HomePage = () => {
  // When homepage charge, charge all polls in state
  /* const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]); */

  // Charge all users in state
  /* useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

   */

  // define selectors
  const allPolls = useSelector(selectAllPolls);
  const allUsers = useSelector(selectAllUsers);

  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  // const answeredIds = Object.keys(userById.answers);
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Tabs onChange={callback} type="card">
          <TabPane tab="Unanswered" key="1">
            <ListofPollExtract />
          </TabPane>
          <TabPane tab="Answered" key="2">
            <ListofPollExtract />
          </TabPane>
        </Tabs>
      </Content>
      <Footer>
        <h4>
          <Users />
          This is Udacity React Nanodegree second project. By Duverger PETGA.
          2021
        </h4>
      </Footer>
    </Layout>
  );
};

export default HomePage;
