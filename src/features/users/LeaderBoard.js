import React from "react";
import { useSelector } from "react-redux";
import UserDashboard from "./UserDashboard";
import { selectUsersIds, selectUsersEntities } from "./usersSlice";

const LeaderBoard = () => {
  const userIDs = useSelector(selectUsersIds);

  const userEntities = useSelector(selectUsersEntities);

  return (
    <div>
      {userIDs
        .map((id) => (
          <UserDashboard
            key={id}
            id={id}
            name={userEntities[id].name}
            avatarURL={userEntities[id].avatarURL}
            answerCount={Object.keys(userEntities[id].answers).length}
            questionCount={userEntities[id].questions.length}
            score={
              Object.keys(userEntities[id].answers).length +
              userEntities[id].questions.length
            }
          />
        ))
        .sort((a, b) => {
          return b.props.score - a.props.score;
        })}
    </div>
  );
};

export default LeaderBoard;
