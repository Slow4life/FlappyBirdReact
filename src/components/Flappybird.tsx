import React from 'react';
import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import Pipes from './pipes';
import { birdPhysics } from "../ts/playerPhysics";
import { obstaclePhysics } from "../ts/obstaclePhysics";


birdPhysics("playerSprite");
obstaclePhysics("pipes");

const Flappybird = (props:any) =>{
    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <div id='playerSprite'><PlayerSprite/></div>
                <div id='pipes'><Pipes/></div>
        </div>
    )
}

export default Flappybird;