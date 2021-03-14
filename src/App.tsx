import React from 'react';
import './App.css';
import {CollidingRectangles} from './components/MockRect' // Remove from production
import Flappybird from './components/Flappybird';

function App() {
  
  // return ( <Flappybird></Flappybird> )
  return ( <CollidingRectangles/> )     // Test aid, remove from production
}

export default App;