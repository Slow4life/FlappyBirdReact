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
        playerDim.y + playerDim.height * 0.9 > obstacleDim1.y) { // 0.9 = hardcoded calibration, not optimal

           return true;
        }

    if (playerDim.x < obstacleDim2.x + obstacleDim2.width &&
        playerDim.x + playerDim.width > obstacleDim2.x &&
        playerDim.y < obstacleDim2.y + obstacleDim2.height + obstacleDim1.height/2 &&
        playerDim.y + playerDim.height > obstacleDim2.y ) {
            
           return true;
        }

    let playerY: number = playerDim.y;
    let groundY: number = groundDim.y - 25 // 25 = hardcoded calibration, not optimal

    // Player fall speed
    if (playerY >= groundY) {

        return true;
    }
                
    return false;
}

    // ########################################### OBSTACLE MOVEMENT ###########################################

    public static obstacleMovement(pipesFirst: any, pipesSecond: any, pipesThird: any,
         lowerFirst: any, upperFirst: any, lowerSecond: any, upperSecond: any,
          lowerThird: any, upperThird: any, gameWindow: any, moveSpeed: number,
           pipeResetDistance: number, randomRange: number, obstacleGap: number) {

        let bottomRandomY = Math.random() * randomRange;
        let gap = obstacleGap;

        let pipeDimFirst = pipesFirst.getBoundingClientRect();
        let pipeDimSecond = pipesSecond.getBoundingClientRect();
        let pipeDimThird = pipesThird.getBoundingClientRect();
        let gameWindowDim = gameWindow.getBoundingClientRect();
        let pipeDim = lowerFirst.getBoundingClientRect();

        let firstX: number = pipeDimFirst.left;
        let secondX: number = pipeDimSecond.left;
        let thirdX: number = pipeDimThird.left;

        pipesFirst.style.left = firstX - moveSpeed + "px";
        pipesSecond.style.left = secondX - moveSpeed + "px";
        pipesThird.style.left = thirdX - moveSpeed + "px"; 

        if (pipeDimFirst.left < gameWindowDim.left - pipeDim.width) { 

            pipesFirst.style.left = pipeResetDistance + "px";
            lowerFirst.style.bottom = bottomRandomY + "px";
            upperFirst.style.bottom = bottomRandomY + gap + "px";
        }
        if (pipeDimSecond.left < gameWindowDim.left - pipeDim.width) {
            
            pipesSecond.style.left = pipeResetDistance + "px"; 
            lowerSecond.style.bottom = bottomRandomY + "px";
            upperSecond.style.bottom = bottomRandomY + gap + "px";
        }

        if (pipeDimThird.left < gameWindowDim.left - pipeDim.width) { 
            
            pipesThird.style.left = pipeResetDistance + "px"; 
            lowerThird.style.bottom = bottomRandomY + "px";
            upperThird.style.bottom = bottomRandomY + gap + "px";
        }
    }

    // ########################################### PLAYER MOVEMENT ###########################################

    public static moveY(playerDiv: any, playerFallSpeed: number) {
    
        let playerDim = playerDiv.getBoundingClientRect();
    
        let playerY: number = playerDim.top;

        playerDiv.style.top = playerY + playerFallSpeed + "px";
    }

    public static jump(playerDiv: any, playerJumpHeight: number) {

        let playerDim = playerDiv.getBoundingClientRect();

        let playerY: number = playerDim.top;

        playerDiv.style.top = playerY - playerJumpHeight + "px";
    }

    // ########################################### SCORE ###########################################

    public static updateScore(obstacle1Div: any, obstacle2Div: any, obstacle3Div: any, playerDiv: any) {

        let pipesFirstDim = obstacle1Div.getBoundingClientRect();
        let pipesSecondDim = obstacle2Div.getBoundingClientRect();
        let pipesThirdDim = obstacle3Div.getBoundingClientRect();
        let playerDivDim = playerDiv.getBoundingClientRect();

        if(pipesFirstDim.left + pipesFirstDim.width === playerDivDim.right - playerDivDim.width ||
            pipesSecondDim.left + pipesSecondDim.width === playerDivDim.right - playerDivDim.width ||
            pipesThirdDim.left + pipesThirdDim.width === playerDivDim.right - playerDivDim.width) {

            return true
        }
        return false
    }
}


