import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getUsers } from "../../utils/api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getUsers();
  return response;
});

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return usersAdapter.setAll(state, action.payload);
    });
  },
});

const usersSelectors = usersAdapter.getSelectors((state) => state.users);

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectEntities: selectUsersEntities,
  selectTotal: selectUserTotal,
  selectAll: selectAllUsers,
} = usersSelectors;

export default usersSlice.reducer;
