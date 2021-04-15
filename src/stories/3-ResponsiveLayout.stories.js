import React from 'react';
import ResponsiveLayout from '../components/ResponsiveLayout';
import DogCard from '../components/DogCard';
import IMG from '../applicationData/dogRelated/images/item-3.jpg';
import '../styles/index.scss';

export const ResponsiveLayoutWithDogCards = () => {
  const renderDogCard = () => (
    <DogCard 
      id={1}
      name='Duman'
      sex='male'
      age={9}
      address='Ankara'
      img={IMG}
    />
  )
  return (
    <ResponsiveLayout>
      {[1,2,3,4,5].map(x => (
        renderDogCard()
      ))}
    </ResponsiveLayout>
  )  
}

const exportObj = { title: 'ResponsiveLayout' };

export default exportObj;
