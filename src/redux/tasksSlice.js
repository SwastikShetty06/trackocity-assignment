import { createSlice } from '@reduxjs/toolkit';

// Initial state with 3 default tasks
const initialState = {
  tasks: [
    { id: 1, text: 'Review Swastik\'s awesome portfolio' },
    { id: 2, text: 'Schedule an interview with Swastik ASAP' },
    { id: 3, text: 'Draft an offer letter for Swastik' },
  ],
};

// Create a slice for tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Reducer to add a new task
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(), // Unique ID based on timestamp
        text: action.payload,
      };
      state.tasks.push(newTask);
    },
    // Reducer to delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

// Export the actions
export const { addTask, deleteTask } = tasksSlice.actions;

// Export the reducer
export default tasksSlice.reducer;
