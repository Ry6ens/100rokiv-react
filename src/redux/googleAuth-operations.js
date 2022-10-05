import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosGetGiftVoucher } from "../api/googleAuth";

export const getGoogleSheetOperations = createAsyncThunk(
  "google-sheet",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosGetGiftVoucher(data);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
