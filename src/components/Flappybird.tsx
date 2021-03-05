import React, { useState } from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import Pipes from './pipes';

import { playerPhysics } from "../ts/playerPhysics";
import { obstaclePhysics } from "../ts/obstaclePhysics";
import { collisionObstacle1 } from "../ts/collisionObstacle1";


playerPhysics("playerSprite");
obstaclePhysics("pipesBoth");
collisionObstacle1("playerSprite", "pipeLower", "pipeUpper");

interface FlappybirdProps{};
interface FlappybirdState{
    gameTime: number;
}

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