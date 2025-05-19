import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
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
  },
});

export const { addTask, removeTask, toggleComplete, toggleAll } =
  taskSlice.actions;
export default taskSlice.reducer;
