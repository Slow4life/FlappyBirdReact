import { lowerFirst, lowerSecond, lowerThird, upperFirst, upperSecond, upperThird } from "./gameInit";

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
        //console.log(playerDim);
        //console.log(obstacleDim1);

       // console.log("log collision" + playerDim.left + 34 >= obstacleDim1.left && playerDim.left <= obstacle1.left + 60 && playerDim.bottom >= obstacleDim1.top)

        if (playerDim.x < obstacleDim1.x + obstacleDim1.width &&
            playerDim.x + playerDim.width > obstacleDim1.x &&
            playerDim.y < obstacleDim1.y + obstacleDim1.height &&
            playerDim.y + playerDim.height/2 > obstacleDim1.y) {
               console.log("collision detected lower pipe")
               return true;
            }

        if (playerDim.x < obstacleDim2.x + obstacleDim2.width &&
            playerDim.x + playerDim.width > obstacleDim2.x &&
            playerDim.y < obstacleDim2.y + obstacleDim2.height + obstacleDim1.height/2 &&
            playerDim.y + playerDim.height/2 > obstacleDim2.y ) {
               console.log("collision detected upper pipe")
               return true;
            }
                    

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


