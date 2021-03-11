import { useEffect } from 'react';
import { GameEngine } from './gameEngine'

export const GameInit = () => {

    let gameWindow: any;
    let groundSprite: any;
    let playerSprite: any;

    let pipesFirst: any;
    let pipesSecond: any;
    let pipesThird: any;

    let lowerFirst: any;
    let upperFirst: any;
    let lowerSecond: any;
    let upperSecond: any;
    let lowerThird: any;
    let upperThird: any;

    let movePipe: any;
    let playerFall: any;


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

        let checkCollision = setInterval(Dummy);
        addJumpListener();
        //console.log(checkCollision);
        movePipe = setInterval(GameEngine.pipeMovement, 1000/60, pipesFirst, pipesSecond, pipesThird, gameWindow);

        playerFall = setInterval(GameEngine.moveY, 1000/60, playerSprite, groundSprite)
    }




    function Dummy() {

        if (GameEngine.obstacleCollision(pipesFirst, pipesSecond, pipesThird) == true) {

            clearInterval(movePipe);
        }
    }


    function addJumpListener() {

        document.addEventListener('keypress', GameEngine.jump); 
        console.log("jumpcall")
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