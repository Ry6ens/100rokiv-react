import { createSlice } from "@reduxjs/toolkit";

import { getGoogleSheetOperations } from "./googleAuth-operations";

export const getContactsSlice = createSlice({
  name: "contacts",
  initialState: {},
  extraReducers: {
    [getGoogleSheetOperations.pending]: (store, { payload }) => {
      store.loading = true;
      store.error = null;
    },
    [getGoogleSheetOperations.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.push(payload);
    },
    [getGoogleSheetOperations.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getContactsSlice.reducer;
