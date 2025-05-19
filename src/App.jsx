import StoreProvider from 'providers/StoreProvider';

import HomePage from 'components/pages/HomePage';

import './styles/globals.scss';

const App = () => {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
};

export default App;
