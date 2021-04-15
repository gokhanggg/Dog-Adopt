import React from 'react';
import { render } from '@testing-library/react';
import DogCardExtended from '../../src/components/DogCardExtendedView';
import IMG from '../../src/components/DogCard/images/item-3.jpg';

test('should render name, sex, age, address, phone, img, desc fields', () => {
  const { getByText, getByAltText } = render(
    <DogCardExtended
      id={1}
      name='Duman'
      sex='male'
      age={9}
      address='Ankara'
      phone='123467896'
      img={IMG}
      desc={`Hi everybody, my name is Uzum! I'm a wiggly girl who is looking to be your family's 55-pound lap dog for life. I love toys and am allll about the balls. I carry my ball around with me the entire time I'm outside. I'm a power chewer for sure, so I'll need my toy bin to always be fully stocked! My perfect day looks something like this: fetch, eat, sleep, repeat. Does this sound like your family's lifestyle, too? Apply to meet me!`}
    />
  );;

  getByText('Duman');
  getByText('male, 9 years old');
  getByText('Ankara');
  getByText('phone: 123467896');
  getByText(`Hi everybody, my name is Uzum! I'm a wiggly girl who is looking to be your family's 55-pound lap dog for life. I love toys and am allll about the balls. I carry my ball around with me the entire time I'm outside. I'm a power chewer for sure, so I'll need my toy bin to always be fully stocked! My perfect day looks something like this: fetch, eat, sleep, repeat. Does this sound like your family's lifestyle, too? Apply to meet me!`);
  getByAltText('Duman');
});

