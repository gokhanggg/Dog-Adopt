import DogCard from '../components/DogCard';
import IMG from '../applicationData/dogRelated/images/item-3.jpg';
import '../styles/index.scss';

export const DogCardStory = () => {
  return (
    <DogCard 
      id={1}
      name='Duman'
      sex='male'
      age={9}
      address='Ankara'
      img={IMG}
    />
  );  
};

const exportObj = { title: 'DogCard' };

export default exportObj;
