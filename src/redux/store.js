import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import getEmailSlice from "../redux/email/email-slice";
import getSheetSlice from "../redux/google/sheet-slice";
import getTelegramSlice from "../redux/telegram/telegram-slice";
import getTicketsSlice from "../redux/tickets/tickets-slice";

export const store = configureStore({
  reducer: {
    tickets: getTicketsSlice,
    email: getEmailSlice,
    google: getSheetSlice,
    telegram: getTelegramSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
