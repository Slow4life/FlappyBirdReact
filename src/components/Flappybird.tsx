import React from 'react';
import {  useEffect, useState, KeyboardEvent} from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
import Pipes from './pipes';
import { Pipe } from './pipes';

//import { playerPhysics } from "../ts/playerPhysics";
//import { obstaclePhysics } from "../ts/obstaclePhysics";
//import { collisionObstacle } from "../ts/collisionObstacle";
import { GameEngine } from '../ts/gameEngine'
import { AudioManager } from "../ts/AudioManager";
import birdPng from '../assets/sprites/bluebird-downflap.png';

//playerPhysics("playerSprite");
//obstaclePhysics("pipesBoth");
//collisionObstacle("playerSprite", "pipeLower", "pipeUpper");

// Takes player sprite, first obstacle, second obstacle, both obstacles in one, obstacle speed, jump key 
//GameEngine("playerSprite", "pipeLower", "pipeUpper", "pipesBoth", 4.9, 32)


function Flappybird() {
    //player values
    const [playerBottom, setPlayerBottom] = useState(256)
    const playerHeight = 24;
    const playerWidth = 34;
    const playerLeft = 250;
    const gravity = 3;
    let gameTimerId: any;
    let id: any;
    Pipe.bind(id);

    //console.log(Pipe.bind(id))
    console.log(Pipes)
    //console.log(id.pipeRef.pipeUpper, id.pipeRef.pipeLower)
    //console.log(GameEngine.checkCollision("player", "pipeUpper", "pipeLower"))

    AudioManager.loadAudioFile("jumpEffect", "/audio/wing.wav", false)


    const playerStyle: any = {
                position: 'absolute',
                backgroundImage: `url(${birdPng})`,
                width: playerWidth,
                height: playerHeight,
                left: playerLeft - (playerWidth/2),
                bottom: playerBottom - (playerHeight/2),
    }

    useEffect(() => {
        if (playerBottom > 112){
            gameTimerId = setInterval(() => {
                setPlayerBottom(playerBottom => playerBottom - gravity)
            }, 30)
        }
        return () => {
            clearInterval(gameTimerId)
        }
    },[playerBottom])

    const jump = (event: any): void =>{
        //console.log(event);
        if(playerBottom < 512 && event.keyCode === 32){
            setPlayerBottom(playerBottom => playerBottom + 50)
            console.log("jump")
            AudioManager.playAudio("jumpEffect");
        }
    }

    return(
        <div id='gameWindow' onKeyDown={jump}>
            <a href='#' onKeyDown={jump} onClick={jump} >clock</a>
            <Scrollingbase/>
            <div id="player"style={playerStyle}/>
            <Pipes></Pipes>
            <div/>
            <div/>
            
        </div>
    )

}

export default Flappybird;