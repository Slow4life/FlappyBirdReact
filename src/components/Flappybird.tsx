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

// Takes player sprite, first obstacle, second obstacle, both obstacles, obstacle speed, jump key 
GameEngine("playerSprite", "pipeLower", "pipeUpper", "pipesBoth", 4.9, 32)

interface FlappybirdProps{}
interface FlappybirdState{
  gameTime: number;
}

class Flappybird extends React.Component<FlappybirdProps, FlappybirdState>{
    readonly gameLaunched = Date.now();
    state = {
        gameTime: 0
    }
    constructor(props: FlappybirdProps){
        super(props);
    }
    render(){
        return(
            <div id='gameWindow'>
                    <Scrollingbase gameTime={this.state.gameTime} />
                    <PlayerSprite gameTime={this.state.gameTime} />
                    <Pipes gameTime={this.state.gameTime} />
            </div>
        )
    }

    updateClock(){
        this.setState({gameTime: Date.now() - this.gameLaunched});
        console.log(this.state.gameTime.toString());
        setTimeout(this.updateClock.bind(this), 200); // TODO test how low we can go
    }
}

export default Flappybird;