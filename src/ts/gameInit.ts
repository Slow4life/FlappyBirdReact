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

    //score and game over screen
    let screen: any;
    let playButton: any;
    let scoreBoard: any;
    let score: number;

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

        screen = document.getElementById("gameover")
        playButton = document.getElementById("playAgain")
        scoreBoard = document.getElementById("scoreBoard")
    }

    // Helper function for div dimensions
    function getSpriteDim(pipe: any) {

        let pipeDim = pipe.getBoundingClientRect();

        return pipeDim;
    }

    function initialize() {

        document.addEventListener('keypress', jumpCheck);

        screen.style.display = "none"
        scoreBoard.style.display = "block"

        // Place player sprite
        playerDiv.style.right = 250 + "px";
        playerDiv.style.top = 100 + "px";

        // Place pipes
        let gameWindowDim = getSpriteDim(windowDiv);

        pipesFirst.style.left = gameWindowDim.width + "px";
        pipesSecond.style.left = gameWindowDim.width + 250 + "px";
        pipesThird.style.left = gameWindowDim.width + 500 + "px";

        // Score
        score = 0;

        console.log(pipesFirst)

        // Calls all functions which are killed when game is over
        gameLoop = setInterval(gameStart, 1000/60);
    }

    function gameStart() {

        // Player falls vertically
        GameEngine.moveY(playerDiv, groundDiv)

        // Pipe movement
        GameEngine.pipeMovement(pipesFirst, pipesSecond, pipesThird,
            pipeLowerFirst, pipeUpperFirst, pipeLowerSecond, pipeUpperSecond, pipeLowerThird, pipeUpperThird, windowDiv, 5);

        // Score update
        let getScore = GameEngine.updateScore(pipesFirst, pipesSecond, pipesThird, playerDiv, score);
        
        // Collision
        if (GameEngine.obstacleCollision(playerDiv, pipeLowerFirst, pipeUpperFirst, groundDiv) || 
            GameEngine.obstacleCollision(playerDiv, pipeLowerSecond, pipeUpperSecond, groundDiv) || 
            GameEngine.obstacleCollision(playerDiv, pipeLowerThird, pipeUpperThird, groundDiv)) { 

                playerDead() }
    }


    function playerDead(){

         document.removeEventListener('keypress', jumpCheck);
         
         removeScore();
        
        if (screen.style.display === "none") {
            screen.style.display = "block"
        }else {
            screen.style.display = "none"
        }
        clearInterval(gameLoop)

        playButton.onclick = function(){initialize();}; 
    }

    function removeScore(){

        if (scoreBoard.style.display === "block") {

            scoreBoard.style.display = "none"
        }

        else {
            
            scoreBoard.style.display = "block"
        }
    }

    function jumpCheck(e: any) {

        if (e.keyCode === 32) { GameEngine.jump(playerDiv, groundDiv); }
    }
   
    function doOnce() {

        document.addEventListener("DOMContentLoaded", getDivs)
        document.addEventListener("DOMContentLoaded", initialize);
    }

    doOnce();

}