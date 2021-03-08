import React from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
import Pipes from './pipes';
import { Pipe } from './pipes';

//import { playerPhysics } from "../ts/playerPhysics";
//import { obstaclePhysics } from "../ts/obstaclePhysics";
//import { collisionObstacle } from "../ts/collisionObstacle";
import { GameEngine } from '../ts/gameEngine'
import { AudioManager } from "../ts/AudioManager";
//playerPhysics("playerSprite");
//obstaclePhysics("pipesBoth");
//collisionObstacle("playerSprite", "pipeLower", "pipeUpper");

// Takes player sprite, first obstacle, second obstacle, both obstacles in one, obstacle speed, jump key 
//GameEngine("playerSprite", "pipeLower", "pipeUpper", "pipesBoth", 4.9, 32)

interface FlappybirdProps{};
interface FlappybirdState{
  gameTime: number;
};




class Flappybird extends React.Component<FlappybirdProps, FlappybirdState>{
    readonly gameLaunched = Date.now();
    state = {
        gameTime: 0
    }
    
    componentDidMount() {
        console.log(GameEngine.checkCollision("playerSprite", "pipeLower", "pipeUpper"));
    }    

  

    render(){
        return(
            <div id='gameWindow'>
                    <Scrollingbase/>
                    <PlayerSprite/>
                    <Pipes/>
            </div>
        )
    }

    updateClock(){
        this.setState({gameTime: Date.now() - this.gameLaunched});
        console.log(this.state.gameTime.toString());
        setTimeout(this.updateClock.bind(this), 200);
    }
}

export default Flappybird;