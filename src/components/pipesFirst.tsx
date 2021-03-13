import pipeN from '../assets/sprites/pipeN.png'
import pipeS from '../assets/sprites/pipeS.png'

import '../sprite.css';

const PipesFirst = (props:any) => {

    let gap = 450;
    let bottomY = Math.random() * 170;

    return(
            <div id='pipesBothFirst'>
    
            <div id='pipeUpperFirst' style={{
            width: 60,
            height: 200,
            bottom: bottomY + gap // Bottom pipe y + gap
            }}><img src={pipeN} alt="null"/></div>
    
            <div id='pipeLowerFirst' style={{
            width: 60,
            height: 200,
            bottom: bottomY
            }}><img src={pipeS} alt="null"/></div>

            </div>
      )
}

export default PipesFirst;