import React, { Component } from 'react';
import birdPng from '../assets/sprites/bluebird-downflap.png';

import '../sprite.css';

const BirdSprite = (props:any) => {

  var bird = <div id='playerSprite'><img src={birdPng}/></div>

  return bird
}

export default BirdSprite;