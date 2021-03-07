import React, { Component } from 'react';
import pipeN from '../assets/sprites/pipeN.png'
import pipeS from '../assets/sprites/pipeS.png'

import '../sprite.css'

interface PipesProps{
    gameTime: number
}

const Pipes  = (props: PipesProps) => {

    const gap: number = 450
    const bottom: number = Math.random() * 170
   
    var pipes = (<div id='pipesBoth'>

      <div id='pipeUpper' style={{
          width: 60,
          height: 200,
          bottom: bottom+gap // Bottom pipe y + gap
      }}><img src={pipeN} alt={"Upper part of obstacle"}/></div>

      <div id='pipeLower' style={{
      position: 'absolute',
      width: 60,
      height: 200,
      bottom: bottom
      }}><img src={pipeS} alt={"Lower part of obstacle"}/></div>

    </div>)

   return pipes;

}

export default Pipes;