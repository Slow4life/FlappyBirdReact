import React from 'react';
import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import { birdPhysics } from "../physics";
import PipeNSprite from './pipes';

birdPhysics("playerSprite");

const Flappybird = (props:any) =>{
    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <div id='playerSprite'><PlayerSprite/></div>
                <div id='pipeNorth'><PipeNSprite/></div>
        </div>
    )
}

export default Flappybird;