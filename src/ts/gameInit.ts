import { GameEngine } from './gameEngine'
import { AudioManager } from "./AudioManager";

export const GameInit = () => {

    // Audio loading
    AudioManager.loadAudioFile("jump", "./audio/wing.wav", false)
    AudioManager.loadAudioFile("die", "./audio/die.wav", false)
    AudioManager.loadAudioFile("point", "./audio/point.wav", false)


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
    let gameLoop: any;

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
        scoreCount = 0;

        // Calls all functions which are killed when game is over
        gameLoop = setInterval(gameStart, 1000/60);
    }

    function gameStart() {

        // Player falls vertically
        GameEngine.moveY(playerDiv, 3/20)

        // Pipe movement
        GameEngine.pipeMovement(pipesFirst, pipesSecond, pipesThird,
            pipeLowerFirst, pipeUpperFirst, pipeLowerSecond, pipeUpperSecond,
             pipeLowerThird, pipeUpperThird, windowDiv, 5, 684, 170, 450);

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

                playerDead() }
    }

    // Triggers upon player death
    function playerDead(){

        AudioManager.playAudio("die")

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

        if (e.keyCode === 32) { // 32 = space bar
             GameEngine.jump(playerDiv, 70); 
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