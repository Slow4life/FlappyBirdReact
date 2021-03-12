import { groupEnd } from "node:console";

export class GameEngine {

// ########################################### COLLISION ###########################################

public static obstacleCollision(playerDiv: any, obstacle1Div: any, obstacle2Div: any, groundDiv:any) {

    let playerDim = playerDiv.getBoundingClientRect();
    let obstacleDim1 = obstacle1Div.getBoundingClientRect();
    let obstacleDim2 = obstacle2Div.getBoundingClientRect();
    let groundDim = groundDiv.getBoundingClientRect();

    if (playerDim.x < obstacleDim1.x + obstacleDim1.width &&
        playerDim.x + playerDim.width > obstacleDim1.x &&
        playerDim.y < obstacleDim1.y + obstacleDim1.height &&
        playerDim.y + playerDim.height * 0.9 > obstacleDim1.y) {

           console.log("collision detected lower pipe")
           return true;
        }

    if (playerDim.x < obstacleDim2.x + obstacleDim2.width &&
        playerDim.x + playerDim.width > obstacleDim2.x &&
        playerDim.y < obstacleDim2.y + obstacleDim2.height + obstacleDim1.height/2 &&
        playerDim.y + playerDim.height > obstacleDim2.y ) {

           console.log("collision detected upper pipe")
           return true;
        }

    let playerY: number = playerDim.y;
    let groundY: number = groundDim.y - 25 // 25 = calibration, not optimal

    // Player fall speed
    if (playerY >= groundY) {

        return true;
    }
                

    return false;
}

    // ########################################### OBSTACLE MOVEMENT ###########################################

    public static pipeMovement(pipesFirst: any, pipesSecond: any, pipesThird: any,
         lowerFirst: any, upperFirst: any, lowerSecond: any, upperSecond: any, lowerThird: any, upperThird: any, gameWindow: any) {

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

    public static moveY(playerDiv: any, groundDiv: any) {
    
        let playerDim = playerDiv.getBoundingClientRect();
        let groundDim = groundDiv.getBoundingClientRect();
    
        let playerY: number = playerDim.top;

        playerDiv.style.top = playerY + 3/20 + "px";
    }

    public static jump(playerDiv: any, groundDiv: any) {

        let playerDim = playerDiv.getBoundingClientRect();
        let groundDim = groundDiv.getBoundingClientRect();

        let y: number = playerDim.top;

        let groundY: number = groundDim.top - 25 // 25 = calibration, not optimal

        if (y <= groundY) {

            playerDiv.style.top = y - 70 + "px"; // Brúka CSS at gera smooth?
        }
    }
}


