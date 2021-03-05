import React, { Component } from 'react';
import pipeN from '../assets/sprites/pipeN.png'
import pipeS from '../assets/sprites/pipeS.png'

import '../birdSprite.css'

const PipesSprite = (props:any) => { 

    const gap: number = 450
    const bottom: number = Math.random() * 170
   
    var pipes = <div id='pipesBoth'>

      <div id='pipeUpper' style={{
          width: 60,
          height: 200,
          bottom:bottom+gap // Bottom pipe y + gap
      }}><img src={pipeN}/></div>

      <div id='pipeLower' style={{
          width: 60,
          height: 200,
          bottom: bottom
      }}><img src={pipeS}/></div>

    </div>

   return pipes;
}

export default PipesSprite;