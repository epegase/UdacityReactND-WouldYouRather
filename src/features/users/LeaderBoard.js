import React from "react";
import { useSelector } from "react-redux";
import UserDashboard from "./UserDashboard";
import { selectUsersIds } from "./usersSlice";

const LeaderBoard = () => {
  const userIDs = useSelector(selectUsersIds);

  //const users = useSelector(selectAllUsers);

  /* const sortedUserIDs = Object.values(users).sort((idA, idB) => {
    const scoreA =
      Object.keys(users[idA].answers).length + users[idA].questions.length;
    const scoreB =
      Object.keys(users[idB].answers).length + users[idB].questions.length;

    return scoreB - scoreA;
  }); */

  return (
    <div>
      {userIDs
        .map((id) => <UserDashboard key={id} id={id} />)
        .sort((a, b) => a.score - b.score)}
    </div>
  );
};

export default LeaderBoard;
