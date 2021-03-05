import React from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
import Pipes from './pipes';

//import { playerPhysics } from "../ts/playerPhysics";
//import { obstaclePhysics } from "../ts/obstaclePhysics";
//import { collisionObstacle } from "../ts/collisionObstacle";
import { GameEngine } from '../ts/gameEngine'

//playerPhysics("playerSprite");
//obstaclePhysics("pipesBoth");
//collisionObstacle("playerSprite", "pipeLower", "pipeUpper");
GameEngine("playerSprite", "pipeLower", "pipeUpper", "pipesBoth", 4.9)

interface FlappybirdProps{};

class Flappybird extends React.Component<FlappybirdProps, any>{
    render(){
        return(
            <div id='gameWindow'>
                    <Scrollingbase/>
                    <PlayerSprite/>
                    <Pipes/>
            </div>
        )
    }
}

export default Flappybird;