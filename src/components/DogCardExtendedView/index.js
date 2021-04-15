import React from 'react';
import { string, number } from 'prop-types';

const DogCardMoreView = ({
  name,
  sex,
  age,
  address,
  phone,
  img,
  desc
}) => {
  return (
    <div className='dog-card-extended'>
      <div className='dog-card-extended-image-info-container'>
        <div className='dog-card-extended-image-container'>
          <img className='dog-card-extended-image' src={img} alt={name} />
        </div>
        <div className='dog-card-info'>
          <span className='dog-card-info-name'>{name}</span>
          <span className='dog-card-info-text'>{sex}, {age} years old</span>
          <span className='dog-card-info-text'>{address}</span>
          <span className='dog-card-info-text'>phone: {phone}</span>
        </div>
      </div>
      <div className='dog-card-extended-desc-container'>
        <span className='dog-card-extended-desc'>{desc}</span>
      </div>
    </div>
  )
}

DogCardMoreView.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  sex: string.isRequired,
  age: number.isRequired,
  address: string.isRequired,
  phone: string.isRequired,
  img: string.isRequired,
  desc: string.isRequired
};

export default DogCardMoreView;
