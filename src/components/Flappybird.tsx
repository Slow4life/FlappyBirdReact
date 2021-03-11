import React from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
import Pipes from './pipes';

import { GameEngine } from '../ts/gameEngine'

// Takes player sprite, first obstacle, second obstacle, score div, ground div, jump key 
GameEngine("playerSprite", "pipeLower", "pipeUpper", "score", "ground", 32)

interface FlappybirdProps{};

interface FlappybirdState{ gameTime: number; };

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