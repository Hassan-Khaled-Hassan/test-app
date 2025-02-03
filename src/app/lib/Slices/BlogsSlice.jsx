
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertDataWithImg } from "../HooksAxios/useInsertData";
import  useDeleteData from "../HooksAxios/useDeleteData";
import { useUpdateDataWithImg } from "../HooksAxios/useUpdateData";



export const AdminCreateNewBlog = createAsyncThunk(
  "Blogs/AdminCreateNewBlog",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await useInsertDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Blog/addBlog`,
        formData
      );
      // console.log("===============================");
      // console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminCreateNewBlog:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);
export const AdminDeleteBlog = createAsyncThunk(
  "Blogs/AdminDeleteBlog",
  async (data, { rejectWithValue }) => {
    try {
      const response = await useDeleteData(
        `api/v1/Blog/deleteBlog/${data}`
      );
      console.log("===============================");
      console.log(response);
      console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminDeleteBlog:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);

export const AdminUpdateNewBlog = createAsyncThunk(
  "Blogs/AdminUpdateNewBlog",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await useUpdateDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Blog/updateBlog/${id}`,
        formData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateNewBlog:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);


// Create slice
const BlogsSlice = createSlice({
  name: "Blogs",
  initialState: {
    AdminCreateBlogs: [],
    AdminDeleteBlogs: [],
    AdminUpdateBlogs: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAdminUpdateClientType: (state) => {
      state.AdminCreateBlogs = [];
      state.AdminUpdateBlogs = [];
      state.AdminDeleteBlogs = [];
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdminCreateNewBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminCreateNewBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminCreateBlogs = action.payload; // Assign payload to state
      })
      .addCase(AdminCreateNewBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminDeleteBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDeleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDeleteBlogs = action.payload; // Assign payload to state
      })
      .addCase(AdminDeleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ====================================
      .addCase(AdminUpdateNewBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateNewBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateBlogs = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateNewBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      });
  },
});

// Export the actions and reducer
export const { resetAdminUpdateClientType, resetError } = BlogsSlice.actions;

export const BlogsReducer = BlogsSlice.reducer;
