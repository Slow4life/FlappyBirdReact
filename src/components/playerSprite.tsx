import birdPng from '../assets/sprites/bluebird-downflap.png';

import '../sprite.css';

const PlayerSprite = (props:any) => {

  let bird = <div id='playerSprite'><img src={birdPng} alt='PlayerSprite'/></div>

  return bird
}

export default PlayerSprite;