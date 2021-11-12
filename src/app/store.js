import { configureStore } from "@reduxjs/toolkit";
import pollsReducer from "../features/polls/pollsSlice";
import usersReducer from "../features/users/usersSlice";
import authuserReducer from "../features/authuser/authuserSlice";

export const store = configureStore({
  reducer: {
    polls: pollsReducer,
    users: usersReducer,
    authuser: authuserReducer,
  },
});
