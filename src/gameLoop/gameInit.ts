import { GameEngine } from '../gameEngine/game'
import { AudioManager } from "../gameEngine/Audio";

export const GameInit = () => {

    // Constants
    const gameFps: number = 1000/60;
    const jumpKey: number = 32;
    const jumpHeight: number = 70;
    const playerStartingX: number = 250;
    const playerStartingY: number = 100;
    const playerFallSpeed: number = 3/20;
    const pipeMoveSpeed: number = 5;
    const pipeResetOffset: number = 684;
    const randomRange: number = 170;
    const obstacleGap: number = 450;

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
    let deathScore: any;
    let highScoreDiv: any;
    let scoreCheck: boolean;
    let scoreCount: number;
    let highScore:number = 0;
    
    // Intervals
    let gameLoopInterval: any;

    function getDivs() {

        // Loads all necessary Divs, in order to avoid potential null references
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

        screen = document.getElementById("gameover");
        playButton = document.getElementById("playAgain");
        scoreBoard = document.getElementById("scoreBoard");
        deathScore = document.getElementById("deathScore");
        highScoreDiv = document.getElementById("highScore");

        // Audio loading
        AudioManager.loadAudioFile("jump", "./audio/wing.wav", false)
        AudioManager.loadAudioFile("die", "./audio/die.wav", false)
        AudioManager.loadAudioFile("point", "./audio/point.wav", false)
    }

    function initialize() {

        document.addEventListener('keypress', jumpCheck);

        // Score screen
        screen.style.display = "none"
        scoreBoard.style.display = "block"

        // Place player sprite
        playerDiv.style.right = playerStartingX + "px";
        playerDiv.style.top = playerStartingY + "px";

        // Place pipes
        let gameWindowDim: DOMRect = GameEngine.getSpriteDim(windowDiv);

        // Initial pipe locations
        pipesFirst.style.left = gameWindowDim.width + "px";
        pipesSecond.style.left = gameWindowDim.width + gameWindowDim.width/2 + "px";
        pipesThird.style.left = gameWindowDim.width + gameWindowDim.width + "px";

        // Score
        scoreCount = 0;

        // Calls all functions which are killed when game is over
        gameLoopInterval = setInterval(gameLoop, gameFps);
    }

    function gameLoop() {

        // Player falls vertically
        GameEngine.playerFall(playerDiv, playerFallSpeed)

        // Pipe movement
        GameEngine.obstacleMovement(pipesFirst, pipesSecond, pipesThird,
            pipeLowerFirst, pipeUpperFirst, pipeLowerSecond, pipeUpperSecond,
             pipeLowerThird, pipeUpperThird, windowDiv, pipeMoveSpeed, pipeResetOffset, randomRange, obstacleGap);

        // Score update
        scoreCheck = GameEngine.updateScore(pipesFirst, pipesSecond, pipesThird, playerDiv);

        if(scoreCheck === true) {

            scoreCount++;
            AudioManager.playAudio("point");
        }

        // Show scores
        scoreBoard.innerHTML = "Score: " + scoreCount;
        deathScore.innerHTML = "Score: " + scoreCount;

        if (scoreCount > highScore) { highScore = scoreCount; }

        highScoreDiv.innerHTML = "High Score: " + highScore;

        // Collision
        if (GameEngine.obstacleCollision(playerDiv, pipeLowerFirst, pipeUpperFirst, groundDiv) || 
            GameEngine.obstacleCollision(playerDiv, pipeLowerSecond, pipeUpperSecond, groundDiv) || 
            GameEngine.obstacleCollision(playerDiv, pipeLowerThird, pipeUpperThird, groundDiv)) { 

            playerDead() 
        }
    }

    // Triggers upon player death
    function playerDead(){

        AudioManager.playAudio("die")

         document.removeEventListener('keypress', jumpCheck);
         
         removeScore();
        
        if (screen.style.display === "none") {

            screen.style.display = "block"
        }
        
        else {

            screen.style.display = "none"
        }

        clearInterval(gameLoopInterval)

        playButton.onclick = function(){ initialize(); }; 
    }

    // Triggers when player moves past pipe
    function removeScore(){

        if (scoreBoard.style.display === "block") {

            scoreBoard.style.display = "none"
        }

        else {
            
            scoreBoard.style.display = "block"
        }
    }

    // Listens to all keyboard presses
    function jumpCheck(e: any) {

        if (e.keyCode === jumpKey) {

             GameEngine.playerJump(playerDiv, jumpHeight);
             AudioManager.stopAudio("jump")
             AudioManager.playAudio("jump")
        }
    }
   
    function doOnce() {

        document.addEventListener("DOMContentLoaded", getDivs)
        document.addEventListener("DOMContentLoaded", initialize);
    }

    doOnce();
}