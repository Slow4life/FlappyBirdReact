import { groundSprite, lowerFirst, lowerSecond, lowerThird, playerSprite, upperFirst, upperSecond, upperThird } from "./gameInit";

export class GameEngine {

// ########################################### COLLISION ###########################################

//playerSprite: string, obstacle1Sprite: string, obstacle2Sprite: string, score: string, groundDiv: string, jumpKey: number

    public static obstacleCollision(playerSpriteDiv: string, obstacle1Sprite: string, obstacle2Sprite: string) {

        let player: any = document.getElementById(playerSpriteDiv);
        let obstacle1: any = document.getElementById(obstacle1Sprite);
        let obstacle2: any = document.getElementById(obstacle2Sprite);
    
        let playerDim = player.getBoundingClientRect();
        let obstacleDim1 = obstacle1.getBoundingClientRect();
        let obstacleDim2 = obstacle2.getBoundingClientRect();
        
        if (playerDim.left + 34 >= obstacleDim1.left && playerDim.left <= obstacle1.left + 60 && playerDim.bottom >= obstacleDim1.top) {

            return true;
        }

        //if (playerDim.right >= obstacleDim2.left && playerDim.left <= obstacleDim2.right && playerDim.top <= obstacleDim2.bottom+100) {

        //    return true;
        //}

        return false;
    }

    // ########################################### OBSTACLE MOVEMENT ###########################################

    public static pipeMovement(pipesFirst: any, pipesSecond: any, pipesThird: any, gameWindow: any) {

        let bottomRandomY = Math.random() * 170;
        let gap = 450;

        let pipeDimFirst = pipesFirst.getBoundingClientRect();
        let pipeDimSecond = pipesSecond.getBoundingClientRect();
        let pipeDimThird = pipesThird.getBoundingClientRect();
        let gameWindowDim = gameWindow.getBoundingClientRect();

        let firstX: number = pipeDimFirst.left;
        let secondX: number = pipeDimSecond.left;
        let thirdX: number = pipeDimThird.left;

        pipesFirst.style.left = firstX - 5 + "px";
        pipesSecond.style.left = secondX - 5 + "px";
        pipesThird.style.left = thirdX - 5 + "px";

        if (pipeDimFirst.left < gameWindowDim.left - 60) { 

            pipesFirst.style.left = 683 + "px";
            lowerFirst.style.bottom = bottomRandomY + "px";
            upperFirst.style.bottom = bottomRandomY + gap + "px";
        }
        if (pipeDimSecond.left < gameWindowDim.left - 60) {
            
            pipesSecond.style.left = 683 + "px"; 
            lowerSecond.style.bottom = bottomRandomY + "px";
            upperSecond.style.bottom = bottomRandomY + gap + "px";
        }

        if (pipeDimThird.left < gameWindowDim.left - 60) { 
            
            pipesThird.style.left = 683 + "px"; 
            lowerThird.style.bottom = bottomRandomY + "px";
            upperThird.style.bottom = bottomRandomY + gap + "px";
        }
    }

    // ########################################### PLAYER MOVEMENT ###########################################

    public static moveY(playerSprite: string, groundDiv: string) {

        let id: any = document.getElementById("playerSprite");
        let ground: any = document.getElementById("ground"); // ID of ground
    
        let rect = id.getBoundingClientRect();
        let groundDim = ground.getBoundingClientRect();
    
        let birdY: number = rect.top;
        let groundY: number = groundDim.top - 25 // 25 = calibration, not optimal

        // Bird fall speed
        if (birdY <= groundY) {

            id.style.top = birdY + 3/20 + "px";
        }
    }

    public static jump() {

        let id: any = document.getElementById("playerSprite");
        let groundId: any = document.getElementById("ground");

        let rect = id.getBoundingClientRect();
        let groundDim = groundId.getBoundingClientRect();

        let y: number = rect.top;

        let groundY: number = groundDim.top - 25 // 25 = calibration, not optimal

        if (y <= groundY) {

            id.style.top = y - 70 + "px"; // Brúka CSS at gera smooth?
        }
    }
}


