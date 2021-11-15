import React from "react";
import { useSelector } from "react-redux";
import UserDashboard from "./UserDashboard";
import { selectUsersIds } from "./usersSlice";

const LeaderBoard = () => {
  const userIDs = useSelector(selectUsersIds);
  return (
    <div>
      {userIDs.map((id) => (
        <UserDashboard key={id} id={id} />
      ))}
    </div>
  );
};

export default LeaderBoard;
