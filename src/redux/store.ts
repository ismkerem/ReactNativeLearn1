import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import drawingSlice from './drawingSlice';
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    draw: drawingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
