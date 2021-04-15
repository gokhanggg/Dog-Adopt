import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "regenerator-runtime/runtime.js";
import ApplicationProvider from '../../src/contexts/applicationContext';
import MirageServer from '../../src/mirageServer';
import DogCards from '../../src/containers/DogCards';

const renderComp = () => {
  return render(
    <ApplicationProvider>
      <DogCards />
    </ApplicationProvider>
  );
}

let server;

beforeEach(() => {
  server = MirageServer();
});

afterEach(() => {
  server.shutdown();
})

test('should render 12 dogs', async () => {
  const { findByText } = renderComp();
  await findByText('Duman');
  await findByText('Anten');
  await findByText('Isot');
  await findByText('Kahve');
  await findByText('Kori');
  await findByText('Patik');
  await findByText('Uzum');
  await findByText('Pasa');
  await findByText('Kete');
  await findByText('Loki');
  await findByText('Fırtına');
  await findByText('Golge');
});

test('should open extended modal view on click to show more', async () => {
  const { findByText } = renderComp();
  const duman = await findByText('Duman');
  const containerElement = duman.parentElement.parentElement;
  const showMore = containerElement.querySelector('.primary-button');
  fireEvent.click(showMore)
  expect(document.querySelector('.dog-card-extended .dog-card-info-name').textContent).toBe('Duman');
});