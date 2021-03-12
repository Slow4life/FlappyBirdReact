import React from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
import PipesFirst from './pipesFirst';
import PipesSecond from './pipesSecond';
import PipesThird from './pipesThird';
import GameOverScreen from './GameOverScreen'
import ScoreBoard from './ScoreBoard'
import { GameInit } from '../ts/gameInit'

function Flappybird() {


    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <PlayerSprite/>
                <PipesFirst/>
                <PipesSecond/>
                <PipesThird/>
                <GameOverScreen/>
                <ScoreBoard/>

        </div>
    )
 
}

GameInit();

export default Flappybird;