import { useEffect } from 'react';
import MirageServer from '../mirageServer';
import ApplicationContextProvider from '../contexts/applicationContext';
import Filter from '../containers/Filters';
import '../styles/index.scss';

export const FilterStories = () => {
  useEffect(() => {
    const server = MirageServer();
    return () => server.shutdown();
  }, []);

  return (
    <ApplicationContextProvider>
      <Filter />
    </ApplicationContextProvider>
  )
}

const exportObj = { title: 'Filter' };

export default exportObj;
