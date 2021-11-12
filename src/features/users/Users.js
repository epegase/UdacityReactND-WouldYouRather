import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { fetchUsers, selectAllUsers } from "./usersSlice";

const Users = () => {
  const AllUsers = useSelector(selectAllUsers);
  console.log(AllUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return AllUsers.map((user) => (
    <User key={user.id} avatarURL={user.avatarURL} />
  ));
};

export default Users;
