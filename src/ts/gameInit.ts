import { useEffect } from 'react';
import { GameEngine } from './gameEngine'

export let gameWindow: any;
export let groundSprite: any;
export let playerSprite: any;

export let pipesFirst: any;
export let pipesSecond: any;
export let pipesThird: any;

export let lowerFirst: any;
export let upperFirst: any;
export let lowerSecond: any;
export let upperSecond: any;
export let lowerThird: any;
export let upperThird: any;

export let movePipe: any;
export let playerFall: any;
export let checkCollision: any;

export const GameInit = () => {

    function loadSprites() {

        // Game window
        gameWindow = document.getElementById("gameWindow");

        // Ground
        groundSprite = document.getElementById("ground");

        // Player sprite
        playerSprite = document.getElementById("playerSprite");

        // Pipe pairs
        pipesFirst = document.getElementById("pipesBothFirst");
        pipesSecond = document.getElementById("pipesBothSecond");
        pipesThird = document.getElementById("pipesBothThird");

        // Pipes
        lowerFirst = document.getElementById("pipeLowerFirst");
        upperFirst = document.getElementById("pipeUpperFirst");
        lowerSecond = document.getElementById("pipeLowerSecond");
        upperSecond = document.getElementById("pipeUpperSecond");
        lowerThird = document.getElementById("pipeLowerThird");
        upperThird = document.getElementById("pipeUpperThird");
    }

    function getSpriteDim(pipe: any) {

        let pipeDim = pipe.getBoundingClientRect();

        return pipeDim;
    }

    function Initialize() {

        // Place player sprite
        playerSprite.style.right = 250 + "px";
        playerSprite.style.top = 100 + "px";

        // Place pipes
        let pipeDimFirst = getSpriteDim(pipesFirst);
        let pipeDimSecond = getSpriteDim(pipesSecond);
        let pipeDimThird = getSpriteDim(pipesThird);

        pipesFirst.style.right = pipeDimFirst.right - 6 + "px";
        pipesSecond.style.right = pipeDimSecond.right - 256 + "px";
        pipesThird.style.right = pipeDimThird.right - 506 + "px";

        addJumpListener();

        checkCollision = setInterval(Dummy, 1000/60);

        movePipe = setInterval(GameEngine.pipeMovement, 1000/60, pipesFirst, pipesSecond, pipesThird, gameWindow);
        playerFall = setInterval(GameEngine.moveY, 1000/60, playerSprite, groundSprite)
    }

    function Dummy() {
       
        if (GameEngine.obstacleCollision("playerSprite", "pipeLowerFirst", "pipeUpperFirst") ||
            GameEngine.obstacleCollision("playerSprite", "pipeLowerSecond", "pipeUpperSecond") ||
            GameEngine.obstacleCollision("playerSprite", "pipeLowerThird", "pipeUpperThird" )) {

            clearInterval(movePipe);
            clearInterval(playerFall)
        }

    }

    function addJumpListener() {

        document.addEventListener('keypress', jumpDummy);
        console.log("jumpcall")
    }

    function jumpDummy(e: any) {

        if (e.keyCode === 32) { GameEngine.jump(); }
    }
/*

    function removeJumpListener() {

        document.removeEventListener("keypress", jump)
    }

    function gameOver() {

        removeJumpListener();
        clearInterval(collisionCheck);
    }
*/
    // Runs until collision is detected
    //let scoreInterval = setInterval(scoreBoard, 100/60)


/*
    let collisionCheckFirst = setInterval(GameEngine.obstacleCollision, 1000/60, "playerSprite", "pipeLowerFirst", "pipeUpperFirst")
    let collisionCheckSecond = setInterval(GameEngine.obstacleCollision, 1000/60, "playerSprite", "pipeLowerSecond", "pipeUpperSecond")
    let collisionCheckThird = setInterval(GameEngine.obstacleCollision, 1000/60, "playerSprite", "pipeLowerThird", "pipeUpperThird")
*/

    function doOnce() {

        document.addEventListener("DOMContentLoaded", loadSprites);
        document.addEventListener("DOMContentLoaded", Initialize);
    }

    doOnce();

}