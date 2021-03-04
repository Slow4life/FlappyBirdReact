import React from 'react';
import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import { birdPhysics } from "../physics";
import PipeSSprite from './pipeSouthSprite';
import PipeNSprite from './pipeNorthSprite';

birdPhysics("playerSprite");

const Flappybird = (props:any) =>{
    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <div id='playerSprite'><PlayerSprite/></div>
                <div id='pipeSouth'><PipeSSprite/></div>
                <div id='pipeNorth'><PipeNSprite/></div>
        </div>
    )
}

export default Flappybird;