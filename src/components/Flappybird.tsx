import React from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
//import Pipes from './pipes';
import PipesFirst from './pipesFirst';
import PipesSecond from './pipesSecond';
import PipesThird from './pipesThird';

import { GameInit } from '../ts/gameInit'

interface FlappybirdProps{};

class Flappybird extends React.Component<FlappybirdProps>{

    constructor(props: FlappybirdProps){
        super(props);
    }
    render(){
        return(
            <div id='gameWindow'>
                    <Scrollingbase/>
                    <PlayerSprite/>
                    <PipesFirst/>
                    <PipesSecond/>
                    <PipesThird/>

            </div>
        )
    }
}

GameInit();

export default Flappybird;