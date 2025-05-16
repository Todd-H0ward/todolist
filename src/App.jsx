import HomePage from './components/pages/HomePage/index.js';
import StoreProvider from './providers/StoreProvider';

import './styles/globals.scss';

const App = () => {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
};

export default App;
