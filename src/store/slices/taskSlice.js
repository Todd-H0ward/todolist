import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);

      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    toggleAll: (state) => {
      const isAllCompleted = state.tasks.every((task) => task.isCompleted);

      state.tasks.forEach((task) => {
        task.isCompleted = !isAllCompleted;
      });
    },
    removeCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isCompleted);
    },
  },
});

export const {
  setFilter,
  addTask,
  removeTask,
  toggleComplete,
  toggleAll,
  removeCompleted,
} = taskSlice.actions;
export default taskSlice.reducer;
