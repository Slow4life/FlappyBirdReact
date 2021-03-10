import React, { CSSProperties } from 'react';
import birdPng from '../assets/sprites/bluebird-downflap.png';

import '../sprite.css';

function PlayerSprite(props: any) {


   return(
     <div style={props.playerStyle}><img src={props.image} alt=""/></div>
     
   )
}

export default PlayerSprite;