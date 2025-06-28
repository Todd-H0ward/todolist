import { configureStore } from '@reduxjs/toolkit';

import taskSlice from './slices/taskSlice.js';

const createStore = (initialState) => {
  const rootReducer = {
    task: taskSlice,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export default createStore;
