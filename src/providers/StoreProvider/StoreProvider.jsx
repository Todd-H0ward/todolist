import { Provider } from 'react-redux';
import createStore from 'store';

const store = createStore();

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
