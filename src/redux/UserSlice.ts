import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../interfaces/LoginResponse.ts";

export interface UserState {
  token: string;
}

const UserInitialState:UserState = {
  token: ''
}

export const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
    }
  }
})

export const {setUserToken} = userSlice.actions;
export default userSlice.reducer;