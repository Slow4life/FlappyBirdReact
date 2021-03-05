import React from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import Pipes from './pipes';

import { playerPhysics } from "../ts/playerPhysics";
import { obstaclePhysics } from "../ts/obstaclePhysics";
import { collisionObstacle } from "../ts/collisionObstacle";


playerPhysics("playerSprite");
obstaclePhysics("pipesBoth");
collisionObstacle("playerSprite", "pipeLower", "pipeUpper");

const Flappybird = (props:any) =>{
    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <PlayerSprite/>
                <Pipes/>
        </div>
    )
}

export default Flappybird;