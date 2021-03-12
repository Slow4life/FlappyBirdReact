import { GameEngine } from './gameEngine'

export const GameInit = () => {

    // Player, ground, game window
    let playerDiv: any;
    let groundDiv: any;
    let windowDiv: any;

    // Pipe pairs
    let pipesFirst: any;
    let pipesSecond: any;
    let pipesThird: any;

    // Pipes
    let pipeLowerFirst: any;
    let pipeUpperFirst: any;
    let pipeLowerSecond: any;
    let pipeUpperSecond: any;
    let pipeLowerThird: any;
    let pipeUpperThird: any;

    // Intervals
    let gameLoop: any;

    function getDivs() {

        playerDiv = document.getElementById("playerSprite");
        groundDiv = document.getElementById("ground");
        windowDiv = document.getElementById("gameWindow");

        pipesFirst = document.getElementById("pipesBothFirst");
        pipesSecond = document.getElementById("pipesBothSecond");
        pipesThird = document.getElementById("pipesBothThird");

        pipeLowerFirst = document.getElementById("pipeLowerFirst");
        pipeUpperFirst = document.getElementById("pipeUpperFirst");
        pipeLowerSecond = document.getElementById("pipeLowerSecond");
        pipeUpperSecond = document.getElementById("pipeUpperSecond");
        pipeLowerThird = document.getElementById("pipeLowerThird");
        pipeUpperThird = document.getElementById("pipeUpperThird");
    }

    // Helper function for div dimensions
    function getSpriteDim(pipe: any) {

        let pipeDim = pipe.getBoundingClientRect();

        return pipeDim;
    }

    function initialize() {

        // Place player sprite
        playerDiv.style.right = 250 + "px";
        playerDiv.style.top = 100 + "px";

        // Place pipes
        let pipeDimFirst = getSpriteDim(pipesFirst);
        let pipeDimSecond = getSpriteDim(pipesSecond);
        let pipeDimThird = getSpriteDim(pipesThird);
        let gameWindowDim = getSpriteDim(windowDiv);

        pipesFirst.style.left = gameWindowDim.width + 6 + "px";
        pipesSecond.style.left = gameWindowDim.width + 256 + "px";
        pipesThird.style.left = gameWindowDim.width + 506 + "px";

        // Calls all functions which are killed when game is over
        gameLoop = setInterval(gameStart, 1000/60);
    }

    function gameStart() {

        // Pipe movement
        GameEngine.pipeMovement(pipesFirst, pipesSecond, pipesThird,
            pipeLowerFirst, pipeUpperFirst, pipeLowerSecond, pipeUpperSecond, pipeLowerThird, pipeUpperThird, windowDiv, 5);

        GameEngine.moveY(playerDiv, groundDiv);

        // Collision
        if (GameEngine.obstacleCollision(playerDiv, pipeLowerFirst, pipeUpperFirst, groundDiv) || 
            GameEngine.obstacleCollision(playerDiv, pipeLowerSecond, pipeUpperSecond, groundDiv) || 
            GameEngine.obstacleCollision(playerDiv, pipeLowerThird, pipeUpperThird, groundDiv)) { 

                clearInterval(gameLoop); }
    }

    function jumpCheck(e: any) {

        if (e.keyCode === 32) { GameEngine.jump(playerDiv, groundDiv); }
    }

    document.addEventListener('keypress', jumpCheck);

    function doOnce() {

        document.addEventListener("DOMContentLoaded", getDivs)
        document.addEventListener("DOMContentLoaded", initialize);
    }

    doOnce();

}