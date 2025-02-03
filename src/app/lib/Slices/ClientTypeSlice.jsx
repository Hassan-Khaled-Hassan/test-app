
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertDataWithToken } from "../HooksAxios/useInsertData";
import  useDeleteData from "../HooksAxios/useDeleteData";
import { UpdateDataWithToken } from "../HooksAxios/useUpdateData";



export const AdminCreateNewClientType = createAsyncThunk(
  "ClientType/AdminCreateNewClientType",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await insertDataWithToken(
        "/api/v1/Types/addClientType",
        formData
      );
      console.log("===============================");
      console.log(response);
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminCreateNewClientType:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);
export const AdminDeleteClientType = createAsyncThunk(
  "ClientType/AdminDeleteClientType",
  async (data, { rejectWithValue }) => {
    try {
      const response = await useDeleteData(
        `/api/v1/Types/deleteClientType/${data}`
      );
     console.log("===============================")
     console.log(response)
     console.log("===============================")
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdmincreateNewCat:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);

export const AdminUpdateNewClientType = createAsyncThunk(
  "ClientType/AdminUpdateNewClientType",
  async ({ id, newData }, { rejectWithValue }) => {
    try {
      console.log(newData);
      const response = await UpdateDataWithToken(
        `api/v1/Types/updateClientType/${id}`,
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
const ClientTypeSlice = createSlice({
  name: "ClientType",
  initialState: {
    AdminCreateClientType: [],
    AdminDeleteClientT: [],
    AdminUpdateClientType: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAdminUpdateClientType: (state) => {
      state.AdminUpdateClientType = [];
      state.AdminCreateClientType = [];
      state.AdminDeleteClientT = [];

    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdminCreateNewClientType.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminCreateNewClientType.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminCreateClientType = action.payload; // Assign payload to state
      })
      .addCase(AdminCreateNewClientType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminDeleteClientType.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDeleteClientType.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDeleteClientT = action.payload; // Assign payload to state
      })
      .addCase(AdminDeleteClientType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ====================================
      .addCase(AdminUpdateNewClientType.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateNewClientType.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateClientType = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateNewClientType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      });
  },
});

// Export the actions and reducer
export const { resetAdminUpdateClientType, resetError } = ClientTypeSlice.actions;
export const ClientTypeReducer = ClientTypeSlice.reducer;
