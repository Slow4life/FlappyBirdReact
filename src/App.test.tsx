import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const gameWindowElement  = document.getElementById('gameWindow') as HTMLElement; // <Flappybird></Flappybird>
  expect(gameWindowElement).toBeInTheDocument();
  const groundElementElement = document.getElementById('ground') as HTMLElement;   // <Scrollingbase/>
  expect(groundElementElement).toBeInTheDOM(gameWindowElement);
});
