import React from 'react';
import { string, number, func } from 'prop-types';

const DogCard = ({
  id,
  name,
  sex,
  age,
  address,
  img,
  onShowMoreClick
}) => {
  return (
    <div className='dog-card'>
      <div className='dog-card-image-container'>
        <img className='dog-card-image' src={img} alt={name} />
      </div>
      <div className='dog-card-info'>
        <span className='dog-card-info-name'>{name}</span>
        <span className='dog-card-info-text'>{sex}, {age} years old</span>
        <span className='dog-card-info-text'>{address}</span>
      </div>
      <button className='primary-button' onClick={() => onShowMoreClick(id)}>Show more</button>
    </div>
  )
}

DogCard.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  sex: string.isRequired,
  age: number.isRequired,
  address: string.isRequired,
  img: string.isRequired,
  onShowMoreClick: func.isRequired,
  onAdopt: func.isRequired
};

export default DogCard;
