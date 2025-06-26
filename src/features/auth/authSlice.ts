import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import  auth  from "@config/firebase";

export type TAuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
};

type TAuthState = {
  user: TAuthUser | null;
};

const initialState: TAuthState = {
  user: null,
};

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TAuthUser | null>) {
      if (!action.payload) {
        state.user = null;
        return;
      }
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
