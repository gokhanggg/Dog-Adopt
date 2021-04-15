import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DogCard from '../../src/components/DogCard';
import IMG from '../../src/components/DogCard/images/item-3.jpg';

const renderComp = (extraProps) => {
  return render(
    <DogCard
      id={1}
      name='Duman'
      sex='male'
      age={9}
      address='Ankara'
      img={IMG}
      {...extraProps}
    />
  );
}

test('should render name, sex, age, address, img fields', () => {
  const { getByText, getByAltText } = renderComp();

  getByText('Duman');
  getByText('male, 9 years old');
  getByText('Ankara');
  getByAltText('Duman');
});

test('should call onShowMoreClick function when show more button clicked', () => {
  const onShowMoreClickMock = jest.fn();

  const { getByText } = renderComp({ onShowMoreClick: onShowMoreClickMock});

  const button = getByText('Show more');
  fireEvent.click(button);
  expect(onShowMoreClickMock).toHaveBeenCalledTimes(1);
  expect(onShowMoreClickMock).toHaveBeenCalledWith(1);
});
