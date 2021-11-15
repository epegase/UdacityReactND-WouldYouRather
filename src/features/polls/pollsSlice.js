import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getPolls, saveQuestion, saveAnswer } from "../../utils/api";

export const fetchPolls = createAsyncThunk("polls/fetchPolls", async () => {
  const response = await getPolls();
  return response;
});

export const addNewPoll = createAsyncThunk(
  "polls/addNewPoll",
  async (question) => {
    const response = await saveQuestion(question);
    console.log(response);
    return response;
  }
);

export const savePollAnswer = createAsyncThunk(
  "polls/savePollAnswer",
  async ({ authedUser, qid, answer }) => {
    await saveAnswer({ authedUser, qid, answer });
    return { authedUser, qid, answer };
  }
);

const pollsAdapter = createEntityAdapter({
  selectId: (poll) => poll.id,
  sortComparer: (a, b) => b.timestamp - a.timestamp,
});

const pollsSlice = createSlice({
  name: "polls",
  initialState: pollsAdapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPolls.fulfilled, (state, action) => {
      return pollsAdapter.setAll(state, action.payload);
    });
    builder.addCase(addNewPoll.fulfilled, pollsAdapter.addOne);
    builder.addCase(savePollAnswer.fulfilled, (state, { payload }) => {
      return pollsAdapter.updateOne(state, {
        authedUser: payload.authedUser,
        qid: payload.qid,
        answer: payload.answer,
      });
    });
  },
});

const pollsSelectors = pollsAdapter.getSelectors((state) => state.polls);

export const {
  selectIds: selectPollIds,
  selectById: selectPollById,
  selectEntities: selectPollsEntities,
  selectTotal: selectPollsTotal,
  selectAll: selectAllPolls,
} = pollsSelectors;

export default pollsSlice.reducer;
