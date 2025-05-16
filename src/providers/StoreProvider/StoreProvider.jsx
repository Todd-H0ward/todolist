import { Provider } from 'react-redux';

import createStore from '../../store/store.js';

const store = createStore();

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
