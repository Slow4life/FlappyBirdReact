import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expected elements', () => {
  render(<App />);
  const gameWindowElement  = document.getElementById('gameWindow') as HTMLElement; // <Flappybird></Flappybird>
  expect(gameWindowElement).toBeInTheDocument();
  const groundElement = document.getElementById('ground') as HTMLElement;   // <Scrollingbase/>
  expect(gameWindowElement).toContainElement(groundElement);
  const playerSprite = document.getElementById('playerSprite') as HTMLElement;
  expect(gameWindowElement).toContainElement(playerSprite);
})
