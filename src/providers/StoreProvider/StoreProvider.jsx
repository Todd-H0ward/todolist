import { TASKS_KEY } from 'constants/storageKeys.js';

import { Provider } from 'react-redux';
import createStore from 'store';

const initialState = localStorage.getItem(TASKS_KEY)
  ? JSON.parse(localStorage.getItem(TASKS_KEY))
  : [];

const store = createStore({
  task: {
    tasks: initialState,
    filter: 'all',
    editingTaskId: null,
  },
});

const handleStorageChange = () => {
  const tasks = store.getState().task.tasks;

  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

store.subscribe(handleStorageChange);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
