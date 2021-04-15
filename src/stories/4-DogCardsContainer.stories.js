import { useEffect } from 'react';
import DogCards from '../containers/DogCards';
import MirageServer from '../mirageServer';
import ApplicationContextProvider from '../contexts/applicationContext';
import '../styles/index.scss';

export const DogCardContainerStory = () => {

  useEffect(() => {
    const server = MirageServer();
    return () => server.shutdown();
  }, [])

  return (
    <ApplicationContextProvider>
      <DogCards />
    </ApplicationContextProvider>
  );
};

const exportObj = { title: 'DogCardContainer' };

export default exportObj;
