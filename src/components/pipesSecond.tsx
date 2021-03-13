import pipeN from '../assets/sprites/pipeN.png'
import pipeS from '../assets/sprites/pipeS.png'

import '../sprite.css';

const PipesSecond = (props:any) => {

    let gap = 450;
    let bottomY = Math.random() * 170;

    return(
            <div id='pipesBothSecond'>
    
            <div id='pipeUpperSecond' style={{
            width: 60,
            height: 200,
            bottom: bottomY + gap // Bottom pipe y + gap
            }}><img src={pipeN} alt="null"/></div>
    
            <div id='pipeLowerSecond' style={{
            width: 60,
            height: 200,
            bottom: bottomY
            }}><img src={pipeS} alt="null"/></div>

            </div>
      )
}

export default PipesSecond;