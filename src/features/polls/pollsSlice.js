import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { getPolls, saveQuestion, saveAnswer } from "../../utils/api";

/* const initialState = {
  polls: [],
  status: "idle",
  error: null,
}; */

export const fetchPolls = createAsyncThunk("polls/fetchPolls", async () => {
  const response = await getPolls();
  return response;
});

export const AddNewPoll = createAsyncThunk(
  "polls/addNewPoll",
  async (question) => {
    const response = await saveQuestion(question);
    return response.data;
  }
);

export const SavePollAnswer = createAsyncThunk(
  "polls/savePollAnswer",
  async (authedUser, qid, answer) => {
    const response = await saveAnswer({ authedUser, qid, answer });
    return response.data;
  }
);

const pollsAdapter = createEntityAdapter({
  selectId: (poll) => poll.id,
});

const pollsSlice = createSlice({
  name: "polls",
  initialState: pollsAdapter.getInitialState({ status: "idle", error: null }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolls.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPolls.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        pollsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchPolls.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder.addCase(AddNewPoll.fulfilled, pollsAdapter.addOne);
  },
});

const pollsSelectors = pollsAdapter.getSelectors((state) => state.polls);

export const {
  selectAll: selectAllPolls,
  selectById: selectPollById,
  selectIds: selectPollIds,
} = pollsSelectors;

export const { pollAdded } = pollsSlice.actions;

export default pollsSlice.reducer;

/* export const selectAllPolls = (state) => state.polls.polls;

export const selectPollById = (state, pollId) =>
  state.polls.polls.find((poll) => poll.id === pollId); */
