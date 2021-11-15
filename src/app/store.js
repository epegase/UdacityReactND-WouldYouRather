import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import authuserReducer from "../features/authuser/authuserSlice";
import pollsReducer from "../features/polls/pollsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    authuser: authuserReducer,
    polls: pollsReducer,
  },
});
