import React, { createRef } from 'react';
import {  useEffect, useState, KeyboardEvent} from 'react';

import Scrollingbase from "./scrollingbase";
import PlayerSprite from './playerSprite';
//import Pipes from './pipes';
//import { Pipe } from './pipes';

//import { playerPhysics } from "../ts/playerPhysics";
//import { obstaclePhysics } from "../ts/obstaclePhysics";
//import { collisionObstacle } from "../ts/collisionObstacle";
import { GameEngine } from '../ts/gameEngine'
import { AudioManager } from "../ts/AudioManager";
import birdPng from '../assets/sprites/bluebird-downflap.png';
import pipeNpng from '../assets/sprites/pipeN.png'
import pipeSpng from '../assets/sprites/pipeS.png'
import Obstacle from './obstacle'
//playerPhysics("playerSprite");
//obstaclePhysics("pipesBoth");
//collisionObstacle("playerSprite", "pipeLower", "pipeUpper");

// Takes player sprite, first obstacle, second obstacle, both obstacles in one, obstacle speed, jump key 
//GameEngine("playerSprite", "pipeLower", "pipeUpper", "pipesBoth", 4.9, 32)


function Flappybird() {
    //player values
    const [playerBottom, setPlayerBottom] = useState(256);
    const playerHeight = 24;
    const playerWidth = 34;
    const playerLeft = 250;
    const gravity = 3;
    const pipeWidth = 60;
    const pipeHeight = 300
    const gap = 150;
    //const pipeBottom = Math.random() * 50
    let gameTimerId: any;
    let id: any;
    let PipeSTimerId: any;
    let pipeNTimerId: any;
    const [pipeNLeft, setPipe1Left] = useState(500)
    const [pipeSLeft, setPipe2Left] = useState(750)
    const [pipeNegHeight, setPipeNegHeight]= useState(0)
    const [pipeNegHeightTwo, setPipeNegHeightTwo]= useState(0)
    const [GameOver, setGameOver]= useState(false)
    
    //console.log(id.pipeRef.pipeUpper, id.pipeRef.pipeLower)


    AudioManager.loadAudioFile("jumpEffect", "/audio/wing.wav", false)
    AudioManager.loadAudioFile("die", "/audio/die.wav", false)

    const pipeNstyle: any = {
        position: 'absolute',
        backgroundImage: `url(${pipeNpng})`,
        width: pipeWidth,
        height: pipeHeight,
        bottom: pipeNegHeight + pipeHeight + gap,
        left: pipeNLeft,
       
    }

        const pipeSstyle: any = {
        position: 'absolute',
        backgroundImage: `url(${pipeSpng})`,
        width: pipeWidth,
        height: pipeHeight,
        bottom: pipeNegHeightTwo,
        left: pipeSLeft,
       
    }

        const pipeNstyle2: any = {
        position: 'absolute',
        backgroundImage: `url(${pipeSpng})`,
        width: pipeWidth,
        height: pipeHeight,
        bottom: pipeNegHeight,
        left: pipeNLeft,
       
    }

        const pipeSstyle2: any = {
        position: 'absolute',
        backgroundImage: `url(${pipeNpng})`,
        width: pipeWidth,
        height: pipeHeight,
        bottom: pipeNegHeight + pipeHeight + gap,
        left: pipeSLeft,
       
    }


    const playerStyle: any = {
                position: 'absolute',
                backgroundImage: `url(${birdPng})`,
                width: playerWidth,
                height: playerHeight,
                left: playerLeft - (playerWidth/2),
                bottom: playerBottom - (playerHeight/2),
                //transfrom: 'translate3d(150px, ${playerBottom}px, 0)' 
    }

    useEffect(() => {
        if (playerBottom > 112){
            gameTimerId = setInterval(() => {
                setPlayerBottom(playerBottom => playerBottom - gravity)
            }, 1000/60)
        }
        return () => {
            clearInterval(gameTimerId)
        }
    },[playerBottom])

    useEffect(() => {
        if (pipeSLeft > -60) {
        PipeSTimerId = setInterval(() => {
            setPipe2Left(pipeSLeft => pipeSLeft - 4)
        }, 1000/60)
        return () => {
            clearInterval(PipeSTimerId)
        }
        } else {
        setPipe2Left(500)
        setPipeNegHeight( - Math.random() * 100)
        }
    }, [pipeSLeft])

    useEffect(() => {
        if (pipeNLeft > -60) {
            pipeNTimerId = setInterval(() => {
            setPipe1Left(pipeNLeft => pipeNLeft - 4)
        }, 1000/60)
        return () => {
            clearInterval(pipeNTimerId)
        }
        } else {
        setPipe1Left(500)
        setPipeNegHeightTwo( - Math.random() * 100)
        }
    }, [pipeSLeft])


    const jump = (event: any): void =>{
        //console.log(event);
        if(playerBottom < 512 && event.keyCode === 32){
            setPlayerBottom(playerBottom => playerBottom + 50)
            console.log("jump")
            AudioManager.playAudio("jumpEffect");
        }
    }

    /*useEffect(() => {

        if(playerLeft == (pipeNLeft + pipeHeight) || playerBottom > (pipeSLeft + pipeHeight)) {
           
           
           console.log("collide")
           AudioManager.playAudio("die")
           clearInterval(gameTimerId)
           clearInterval(pipeNTimerId)
           clearInterval(PipeSTimerId)
        }  
    }) */
   /* useEffect(() => {
       if (GameEngine.checkCollision("player", "upper", "lower")){
           console.log("collide")
           AudioManager.playAudio("die")
           clearInterval(gameTimerId)
           clearInterval(pipeNTimerId)
           clearInterval(PipeSTimerId)
       }
    })*/
    //console.log(document.getElementById("player")?.getBoundingClientRect())
    //console.log(GameEngine.checkCollision("player", "upper", "lower"))
    return(
        <div id='gameWindow' onKeyDown={jump}>
            <a href='#' onKeyDown={jump} onClick={jump} >clock</a>
            <Scrollingbase/>
            <div id="player" style={playerStyle}/>

            <Obstacle 
            bgImage1 = {pipeNpng}
            bgImage2 = {pipeSpng}
            obstacleWidth = {pipeWidth}
            obstacleHeight = {pipeHeight}
            randomBottom = {pipeNegHeight}
            gap = {gap}
            obstaclesLeft = {pipeNLeft}/>
            
        </div>
    )

}/*
            <div id="upper" style = {pipeNstyle}/>
            <div id="lower" style= {pipeSstyle} />
            <div style = {pipeNstyle2}/>
            <div style= {pipeSstyle2} />*/
export default Flappybird;