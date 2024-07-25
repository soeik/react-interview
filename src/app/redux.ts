import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UsersPageState {}

const initialState = {} satisfies UsersPageState as UsersPageState;

const usersSlice = createSlice({
  name: "usersPage",
  initialState,
  reducers: {
    fetchUsersSuccess(state, { payload: users }: PayloadAction<User[]>) {},
  },
});

export const { fetchUsersSuccess } = usersSlice.actions;
export default usersSlice.reducer;
