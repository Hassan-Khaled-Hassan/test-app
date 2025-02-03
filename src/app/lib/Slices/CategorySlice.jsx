
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertDataWithImg } from "../HooksAxios/useInsertData";
import  useDeleteData from "../HooksAxios/useDeleteData";
import { useUpdateDataWithImg } from "../HooksAxios/useUpdateData";



export const AdmincreateNewCat = createAsyncThunk(
  "Category/AdmincreateNewCat",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await useInsertDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/addCategory`,
        formData
      );
     console.log("===============================")
     console.log("===============================")
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdmincreateNewCat:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);
export const AdminDeleteCat = createAsyncThunk(
  "Category/AdminDeleteCat",
  async (data, { rejectWithValue }) => {
    try {
      const response = await useDeleteData(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/deleteCategory/${data}`
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

export const AdminUpdateNewCat = createAsyncThunk(
  "Category/AdminUpdateNewCat",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await useUpdateDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/updateCategory/${id}`,
        formData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateNewCat:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);


// Create slice
const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    AdmincreateCategory: [],
    AdminDeleteCategory : [],
    AdminUpdateCategory: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AdmincreateNewCat.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdmincreateNewCat.fulfilled, (state, action) => {
        state.loading = false;
        state.AdmincreateCategory = action.payload; // Assign payload to state
      })
      .addCase(AdmincreateNewCat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminDeleteCat.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDeleteCat.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDeleteCategory = action.payload; // Assign payload to state
      })
      .addCase(AdminDeleteCat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ====================================
      .addCase(AdminUpdateNewCat.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateNewCat.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateCategory = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateNewCat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
  },
});

// Export the actions and reducer
export const CategoryReducer = CategorySlice.reducer;
