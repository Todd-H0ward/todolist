import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.task.tasks;
export const selectFilters = (state) => state.task.filter;
export const selectEditingTaskId = (state) => state.task.editingTaskId;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilters],
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.isCompleted);
      case 'completed':
        return tasks.filter((task) => task.isCompleted);
      case 'all':
      default:
        return tasks;
    }
  },
);
