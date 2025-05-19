import { configureStore } from '@reduxjs/toolkit';

import taskSlice from './slices/taskSlice.js';

const createStore = () => {
  const rootReducer = {
    task: taskSlice,
  };

  return configureStore({
    reducer: rootReducer,
  });
};

export default createStore;
