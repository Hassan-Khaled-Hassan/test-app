
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertDataWithImg } from "../HooksAxios/useInsertData";
import  useDeleteData from "../HooksAxios/useDeleteData";
import { useUpdateDataWithImg } from "../HooksAxios/useUpdateData";



export const AdminCreateNewClient = createAsyncThunk(
  "Clients/AdminCreateNewClient",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await useInsertDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Clients/addClient`,
        formData
      );
      console.log("===============================");
      console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminCreateNewClient:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);
export const AdminDeleteClient = createAsyncThunk(
  "Clients/AdminDeleteClient",
  async (data, { rejectWithValue }) => {
    try {
      const response = await useDeleteData(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Clients/deleteClient/${data}`
      );
     console.log("===============================")
     console.log(response)
     console.log("===============================")
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminDeleteClient:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);

export const AdminUpdateNewClient = createAsyncThunk(
  "Clients/AdminUpdateNewClient",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await useUpdateDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Clients/updateClient/${id}`,
        formData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateNewClient:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);


// Create slice
const ClientsSlice = createSlice({
  name: "Clients",
  initialState: {
    AdminCreateClient: [],
    AdminDeleteClients: [],
    AdminUpdateClient: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAdminUpdateClientType: (state) => {
      state.AdminUpdateClient = [];
      state.AdminCreateClient = [];
      state.AdminDeleteClients = [];
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdminCreateNewClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminCreateNewClient.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminCreateClient = action.payload; // Assign payload to state
      })
      .addCase(AdminCreateNewClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminDeleteClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDeleteClient.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDeleteClients = action.payload; // Assign payload to state
      })
      .addCase(AdminDeleteClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ====================================
      .addCase(AdminUpdateNewClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateNewClient.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateClient = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateNewClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      });
  },
});

// Export the actions and reducer
export const { resetAdminUpdateClientType, resetError } = ClientsSlice.actions;
export const ClientsReducer = ClientsSlice.reducer;
