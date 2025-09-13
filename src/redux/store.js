import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Add the tasks reducer to the store
  },
});

export default store;
