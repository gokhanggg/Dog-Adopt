import React, { useEffect } from 'react';
import MirageServer from './mirageServer';
import ApplicationContextProvider from './contexts/applicationContext';
import DogCards from './containers/DogCards';
import Filters from './containers/Filters';
import './styles/index.scss';

function App() {
  useEffect(() => {
    MirageServer();
  }, [])

  return (
    <ApplicationContextProvider>
      <Filters />
      <DogCards />
    </ApplicationContextProvider>
  );
}

export default App;
