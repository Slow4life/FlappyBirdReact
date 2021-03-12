import React from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
//import Pipes from './pipes';
import PipesFirst from './pipesFirst';
import PipesSecond from './pipesSecond';
import PipesThird from './pipesThird';
import GameOverScreen from './GameOverScreen'
import { GameInit } from '../ts/gameInit'

interface FlappybirdProps{};

function Flappybird() {


    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <PlayerSprite/>
                <PipesFirst/>
                <PipesSecond/>
                <PipesThird/>
                <GameOverScreen/>

        </div>
    )
 
}

GameInit();

export default Flappybird;