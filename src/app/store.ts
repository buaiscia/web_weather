import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({ reducer })

export default store;
