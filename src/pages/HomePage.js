import React, { useEffect } from "react";
import Navbar from "../app/Navbar";
import { Tabs } from "antd";
import ListofPollExtract from "../features/polls/ListofPollExtract";
import { useSelector, useDispatch } from "react-redux";
import { fetchPolls, selectPollIds } from "../features/polls/pollsSlice";
import { selectAuthedUser } from "../features/authuser/authuserSlice";
import { fetchUsers, selectUserById } from "../features/users/usersSlice";

const HomePage = () => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const authuser = useSelector(selectAuthedUser);
  const authuserById = useSelector((state) => selectUserById(state, authuser));
  const ListofPollId = useSelector(selectPollIds);
  console.log(ListofPollId);
  const answeredQuestionIds = Object.keys(authuserById.answers);

  console.log(answeredQuestionIds);
  const unansweredQuestionIds = ListofPollId.filter(function (x) {
    if (answeredQuestionIds.indexOf(x) === -1) return true;
    else return false;
  });

  return (
    <div>
      <Navbar />
      <div className="home-tabs">
        <Tabs onChange={callback} type="card">
          <TabPane tab="Unanswered" key="1">
            <ListofPollExtract
              idsList={unansweredQuestionIds}
              emptyListNote="No Unaswered Questions! Create new question! "
            />
          </TabPane>
          <TabPane tab="Answered" key="2">
            <ListofPollExtract
              idsList={answeredQuestionIds}
              emptyListNote="No Answered Questions!"
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
