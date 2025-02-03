import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertDataWithImg } from "../HooksAxios/useInsertData";
import useDeleteData from "../HooksAxios/useDeleteData";
import { useUpdateDataWithImg } from "../HooksAxios/useUpdateData";

export const AdminCreateNewProduct = createAsyncThunk(
  "Products/AdminCreateNewProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await useInsertDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/addProduct`,
        formData
      );
      // console.log("===============================");
      // console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminCreateNewProduct:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);
export const AdminDeleteProduct = createAsyncThunk(
  "Products/AdminDeleteProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await useDeleteData(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/deleteProduct/${data}`
      );
      console.log("===============================");
      console.log(response);
      console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminDeleteProduct:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);

export const AdminUpdateNewProduct = createAsyncThunk(
  "Products/AdminUpdateNewProduct",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await useUpdateDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/updateProduct/${id}`,
        formData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateNewProduct:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

// Create slice
const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    AdminCreateProducts: [],
    AdminDeleteProducts: [],
    AdminUpdateProducts: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAdminUpdateClientType: (state) => {
      state.AdminCreateProducts = [];
      state.AdminUpdateProducts = [];
      state.AdminDeleteProducts = [];
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdminCreateNewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminCreateNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminCreateProducts = action.payload; // Assign payload to state
      })
      .addCase(AdminCreateNewProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminDeleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDeleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDeleteProducts = action.payload; // Assign payload to state
      })
      .addCase(AdminDeleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ====================================
      .addCase(AdminUpdateNewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateProducts = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateNewProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      });
  },
});

// Export the actions and reducer
export const { resetAdminUpdateClientType, resetError } = ProductsSlice.actions;

export const ProductsReducer = ProductsSlice.reducer;
