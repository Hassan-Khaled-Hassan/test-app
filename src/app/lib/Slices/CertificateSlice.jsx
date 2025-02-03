
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertDataWithImg } from "../HooksAxios/useInsertData";
import  useDeleteData from "../HooksAxios/useDeleteData";
import { useUpdateDataWithImg } from "../HooksAxios/useUpdateData";



export const AdminCreateNewCertificate = createAsyncThunk(
  "Certificates/AdminCreateNewCertificate",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await useInsertDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Certification/addCertification`,
        formData
      );
      // console.log("===============================");
      // console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminCreateNewCertificate:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);
export const AdminDeleteCertificate = createAsyncThunk(
  "Certificates/AdminDeleteCertificate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await useDeleteData(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Certification/deleteCertification/${data}`
      );
      console.log("===============================");
      console.log(response);
      console.log("===============================");
      // Check for successful response
      return response;
    } catch (e) {
      console.error("Error in AdminDeleteCertificate:", e);
      return rejectWithValue(e.response?.data || e.message); // Handle the error
    }
  }
);

export const AdminUpdateNewCertificate = createAsyncThunk(
  "Certificates/AdminUpdateNewCertificate",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await useUpdateDataWithImg(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Certification/updateCertification/${id}`,
        formData
      );
      return response;
    } catch (e) {
      console.error("Error in AdminUpdateNewCertificate:", e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);


// Create slice
const CertificateSlice = createSlice({
  name: "Certificates",
  initialState: {
    AdminCreateCertificates: [],
    AdminDeleteCertificates: [],
    AdminUpdateCertificates: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAdminUpdateClientType: (state) => {
      state.AdminCreateCertificates = [];
      state.AdminUpdateCertificates = [];
      state.AdminDeleteCertificates = [];
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdminCreateNewCertificate.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminCreateNewCertificate.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminCreateCertificates = action.payload; // Assign payload to state
      })
      .addCase(AdminCreateNewCertificate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ================================
      .addCase(AdminDeleteCertificate.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDeleteCertificate.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDeleteCertificates = action.payload; // Assign payload to state
      })
      .addCase(AdminDeleteCertificate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      })
      // ====================================
      .addCase(AdminUpdateNewCertificate.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminUpdateNewCertificate.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminUpdateCertificates = action.payload; // Assign payload to state
      })
      .addCase(AdminUpdateNewCertificate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error
      });
  },
});

// Export the actions and reducer
export const { resetAdminUpdateClientType, resetError } = CertificateSlice.actions;

export const CertificateReducer = CertificateSlice.reducer;
