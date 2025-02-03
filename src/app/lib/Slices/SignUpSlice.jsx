import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create async thunk for each action
export const createNewUser = createAsyncThunk(
  "auth/createNewUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.Backend_URL}api/v1/auth/signUp`,
        data
      );
      return response.data; // Return the response data directly
    } catch (e) {
      return rejectWithValue(e.response.data); // Return error response if it fails
    }
  }
);

export const createLogin = createAsyncThunk(
  "auth/createLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Auth/login`,
        data
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const ForgetPasswordLogin = createAsyncThunk(
  "auth/forgetPasswordLogin",
  async (data, { rejectWithValue }) => {
    try {
      // console.log("Backend URL:", process.env.NEXT_PUBLIC_Backend_URL);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Auth/forgetPass`,
        data
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const VerifyCode = createAsyncThunk(
  "auth/verifyCode",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Auth/verifyResetCode`,
        data
      );
      return response.data;
    } catch (e) {
      console.log(e.response.data);
      return rejectWithValue(e.response.data);
    }
  }
);

export const UpdatePasswordFunction = createAsyncThunk(
  "auth/UpdatePasswordFunction",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Auth/resetPassword`,
        data
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    createUser: [],
    LoginUser: [],
    ForgetPass: [],
    verifyCode: [],
    UpdatePass: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAdminUpdateClientType: (state) => {
      state.createUser = [];
      state.LoginUser = [];
      state.ForgetPass = [];
      state.verifyCode = [];
      state.UpdatePass = [];

    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.createUser = action.payload; // Assign payload to state
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(createLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(createLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.LoginUser = action.payload;
      })
      .addCase(createLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ================================
      .addCase(ForgetPasswordLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(ForgetPasswordLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.ForgetPass = action.payload;
      })
      .addCase(ForgetPasswordLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ================================
      .addCase(VerifyCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(VerifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyCode = action.payload;
      })
      .addCase(VerifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ================================
      .addCase(UpdatePasswordFunction.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdatePasswordFunction.fulfilled, (state, action) => {
        state.loading = false;
        state.UpdatePass = action.payload;
      })
      .addCase(UpdatePasswordFunction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAdminUpdateClientType, resetError } = authSlice.actions;

// Export the actions and reducer
export const authReducer = authSlice.reducer;
