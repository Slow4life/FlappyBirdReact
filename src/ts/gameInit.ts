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
    let movePipe: any;
    let playerFall: any;
    let checkCollision: any;

    document.addEventListener('keypress', jumpCheck);

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

    function getSpriteDim(pipe: any) {

        let pipeDim = pipe.getBoundingClientRect();

        return pipeDim;
    }

    function initialize() {

        // Place player sprite
        console.log(playerDiv)
        playerDiv.style.right = 250 + "px";
        playerDiv.style.top = 100 + "px";

        // Place pipes
        let pipeDimFirst = getSpriteDim(pipesFirst);
        let pipeDimSecond = getSpriteDim(pipesSecond);
        let pipeDimThird = getSpriteDim(pipesThird);

        pipesFirst.style.right = pipeDimFirst.right - 6 + "px";
        pipesSecond.style.right = pipeDimSecond.right - 256 + "px";
        pipesThird.style.right = pipeDimThird.right - 506 + "px";

        checkCollision = setInterval(collision, 1000/60);
        movePipe = setInterval(GameEngine.pipeMovement, 1000/60, pipesFirst, pipesSecond, pipesThird,
             pipeLowerFirst, pipeUpperFirst, pipeLowerSecond, pipeUpperSecond, pipeLowerThird, pipeUpperThird, windowDiv);
        playerFall = setInterval(GameEngine.moveY, 1000/60, playerDiv, groundDiv)
    }

    function collision() {

        if (GameEngine.obstacleCollision(playerDiv, pipeLowerFirst, pipeUpperFirst)) {

            console.log("collide first")
            clearInterval(movePipe);
        }

        if (GameEngine.obstacleCollision(playerDiv, pipeLowerSecond, pipeUpperSecond)) {

            console.log("collide second")
            clearInterval(movePipe);
        }

        if (GameEngine.obstacleCollision(playerDiv, pipeLowerThird, pipeUpperThird)) {

            console.log("collide third")
            clearInterval(movePipe);
        }
    }

    function jumpCheck(e: any) {

        if (e.keyCode === 32) { GameEngine.jump(playerDiv, groundDiv); }
    }
/*

    function gameOver() {

        removeJumpListener();
        clearInterval(collisionCheck);
    }
*/

    function doOnce() {

        document.addEventListener("DOMContentLoaded", getDivs)
        document.addEventListener("DOMContentLoaded", initialize);
    }

    doOnce();

}