import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertDataWithToken } from "../HooksAxios/useInsertData";
import  useDeleteData from "../HooksAxios/useDeleteData";
import {
  UpdateDataWithToken,
  useUpdateDataWithImg,
} from "../HooksAxios/useUpdateData";


// Create async thunk for each action
export const AdmincreateNewUser = createAsyncThunk(
  "user/AdmincreateNewUser",
  async (data, { rejectWithValue }) => {
    try {
      // console.log("==============================")
      // console.log(data)
      console.log("==============================")
      const response = await insertDataWithToken(
        "/api/v1/Users/createUser",
        data
      );
      // console.log("==============================")
      // console.log("################################# - Response Received");
      // console.log("Response:", response);
      return response;
    } catch (e) {
      return rejectWithValue(e.response.data); // Return error response if it fails
    }
  }
);
export const AdminDeleteUser = createAsyncThunk(
  "user/AdminDeleteUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await useDeleteData(`/api/v1/Users/Delete-User/${data}`);
      // console.log("===============================");
      // console.log(response);
      // console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdmincreateNewCat:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);

export const AdminUpdateNewUser = createAsyncThunk(
  "user/AdminUpdateNewUser",
  async ({ id, newData }, { rejectWithValue }) => {
    try {
      console.log(newData);
      const response = await UpdateDataWithToken(
        `/api/v1/Users/Edit-UserData/${id}`,
        newData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateNewCat:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const AdminUpdateUserProfile = createAsyncThunk(
  "user/AdminUpdateUserProfile",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await useUpdateDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Users/changeUserData`,
        formData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateUserProfile:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
export const AdminUpdateUserPass = createAsyncThunk(
  "user/AdminUpdateUserPass",
  async (newData, { rejectWithValue }) => {
    try {
      console.log(newData);
      const response = await UpdateDataWithToken(
        `/api/v1/Users/changePass`,
        newData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateNewCat:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
// Create slice
const UserSlice = createSlice({
  name: "user",
  initialState: {
    AdmincreateUser: [],
    AdminUpdateUsers: [],
    AdminDeleteUsers: [],
    AdminUpdateProfile: [],
    AdminUpdatePass: [],

    
    loading: false,
    error: null,
  },
  reducers: {
    resetAdminUpdateClientType: (state) => {
      state.AdmincreateUser = [];
      state.AdminUpdateUsers = [];
      state.AdminDeleteUsers = [];
      state.AdminUpdateProfile = [];
      state.AdminUpdatePass = [];
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdmincreateNewUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdmincreateNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.AdmincreateUser = action.payload; // Assign payload to state
      })
      .addCase(AdmincreateNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminDeleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDeleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDeleteUsers = action.payload; // Assign payload to state
      })
      .addCase(AdminDeleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminUpdateNewUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateUsers = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      }) // AdminUpdateUserProfile
      // ================================
      .addCase(AdminUpdateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateProfile = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminUpdateUserPass.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateUserPass.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdatePass = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateUserPass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      });
  },
});

// Export the actions and reducer
export const { resetAdminUpdateClientType, resetError } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;
