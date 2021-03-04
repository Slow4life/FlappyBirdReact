import React, { Component } from 'react';
import pipeN from '../assets/sprites/pipeN.png'
import pipeS from '../assets/sprites/pipeS.png'

const PipeNSprite = (props:any) => { 

    const gap: number = 450
    const bottomS: number = Math.random() * 100

  return (
      
   <div>

<div id='pipeSouth' style={{
            position: 'absolute',
            width: 60,
            right: -65,
            height: 200,
            bottom:bottomS
        }}><img src={pipeS}/></div>

<div id='pipeNorth' style={{
            position: 'absolute',
            width: 60,
            right: -65,
            height: 200,
            bottom: bottomS+gap
        }}><img src={pipeN}/></div>


</div>

    
    

  )
}

export default PipeNSprite;