import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const gameWindowElement  = document.getElementById('gameWindow') as HTMLElement; // <Flappybird></Flappybird>
  expect(gameWindowElement).toBeInTheDocument();
  const groundElement = document.getElementById('ground') as HTMLElement;   // <Scrollingbase/>
  expect(gameWindowElement).toContainElement(groundElement);
  const mover1Element = document.getElementsByClassName('mover-1')[0] as HTMLElement;
  expect (gameWindowElement).toContainElement(mover1Element);   // Rather redunant.
});
