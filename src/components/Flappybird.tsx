import React, { useState } from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import Pipes from './pipes';

//import { playerPhysics } from "../ts/playerPhysics";
//import { obstaclePhysics } from "../ts/obstaclePhysics";
//import { collisionObstacle } from "../ts/collisionObstacle";
import { GameEngine } from '../ts/gameEngine'

//playerPhysics("playerSprite");
//obstaclePhysics("pipesBoth");
//collisionObstacle("playerSprite", "pipeLower", "pipeUpper");
GameEngine("playerSprite", "pipeLower", "pipeUpper", "pipesBoth", 4.9)

const gameStarted = Date.now();
interface FlappybirdProps{};

const Flappybird = (props:FlappybirdProps) =>{
    const[gameTime, setGameTime] = useState(0);
    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <PlayerSprite/>
                <Pipes/>
        </div>
    )
}

export default Flappybird;