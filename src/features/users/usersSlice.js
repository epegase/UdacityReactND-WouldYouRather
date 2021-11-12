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
  initialState: usersAdapter.getInitialState({ status: "idle", error: null }),
  reducers: {
    addUser: usersAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched users to the array
        usersAdapter.setAll(state, action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const userSelectors = usersAdapter.getSelectors((state) => state.users);

export const {
  selectByIds: selectUserByIds,
  selectEntities: selectUserEntities,
  selectById: selectUserById,
  selectTotal: selectUserTotal,
  selectAll: selectAllUsers,
} = userSelectors;

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
