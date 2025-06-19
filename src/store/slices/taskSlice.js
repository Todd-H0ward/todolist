import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
  editingTaskId: null,
  isEditing: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setEditingTaskId: (state, action) => {
      state.editingTaskId = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
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
    changeTaskTitle: (state, action) => {
      const task = state.tasks.find((task) => task.id === state.editingTaskId);

      if (task) {
        task.title = action.payload;
      }
    },
  },
});

export const {
  setFilter,
  setEditingTaskId,
  setIsEditing,
  addTask,
  removeTask,
  toggleComplete,
  toggleAll,
  removeCompleted,
  changeTaskTitle,
} = taskSlice.actions;
export default taskSlice.reducer;
