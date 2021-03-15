import {MockRect} from "../components/MockRect";
import assert from "assert";

export class GameEngine {

// Helper function for div dimensions
public static getSpriteDim(div: any) {

    let pipeDim: DOMRect = div.getBoundingClientRect();

    return pipeDim;
}

// ########################################### COLLISION ###########################################


public static obstacleCollision(playerDiv: DOMRect,
                                obstacle1Div: DOMRect,
                                obstacle2Div: DOMRect,
                                groundDiv:DOMRect) {
    const playerDim: DOMRect = GameEngine.getSpriteDim(playerDiv);
    const theoreticalPlayerHeight = playerDim.height;
    // const practicalPlayerHeight = theoreticalPlayerHeight * 0.9;    // 0.9 = hardcoded calibration, not optimal
    // playerDim.height = practicalPlayerHeight;
    const obstacleDim1: DOMRect = GameEngine.getSpriteDim(obstacle1Div);
    const obstacleDim2: DOMRect = GameEngine.getSpriteDim(obstacle2Div);
    const groundDim: DOMRect = GameEngine.getSpriteDim(groundDiv);
    /*
    if (GameEngine.dOMRectCollision(playerDim, obstacleDim1)){
        return true
    }
    if (GameEngine.dOMRectCollision(playerDim, obstacleDim2)){
        return true
    }
    if (GameEngine.dOMRectCollision(playerDim, groundDim)){
        return true
    }
    // No collision detected, so
    return false;
    */

    // The way to test the following, more optimized code:
    // Run both general and optimized code in parallel.
    // Assert that the results are equal.
    // Run through a lot of games.
    // Remove the general code


    if (playerDim.x < obstacleDim1.x + obstacleDim1.width &&
        playerDim.x + playerDim.width > obstacleDim1.x &&
        playerDim.y < obstacleDim1.y + obstacleDim1.height &&
        playerDim.y + playerDim.height * 0.9 > obstacleDim1.y) {    // 0.9 = hardcoded calibration, not optimal


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

    static dOMRectCollision(r1: DOMRect | MockRect, r2: DOMRect | MockRect){
        // Parameters should really be DOMRect,
        // but because getBoundingClientRect() does not work in the Jest test
        // environment, we also need to accept MockRect parameters.

        // Testing rectangles pairwise for collition, to facilitate testing

        // More general that needed in the initial FlappyBird implementation:
        // will detect collisions from all directions.
        if (r1.left > (r2.right)){
            return false
        }
        if (r2.left > (r1.right)){
            return false
        }
        if (r1.top > (r2.bottom)){
            return false
        }
        if (r2.top > (r1.bottom)){
            return false
        }
        return true
    }

    // ########################################### OBSTACLE MOVEMENT ###########################################

    public static obstacleMovement(pipesFirst: any, pipesSecond: any, pipesThird: any,
         lowerFirst: any, upperFirst: any, lowerSecond: any, upperSecond: any,
          lowerThird: any, upperThird: any, gameWindow: any, moveSpeed: number,
           pipeResetDistance: number, randomRange: number, obstacleGap: number) {

        let bottomRandomY = Math.random() * randomRange;
        let gap = obstacleGap;

        let pipeDimFirst: DOMRect = GameEngine.getSpriteDim(pipesFirst);
        let pipeDimSecond: DOMRect = GameEngine.getSpriteDim(pipesSecond);
        let pipeDimThird: DOMRect = GameEngine.getSpriteDim(pipesThird);
        let gameWindowDim: DOMRect = GameEngine.getSpriteDim(gameWindow);
        let pipeDim: DOMRect = GameEngine.getSpriteDim(lowerFirst);

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

    public static playerFall(playerDiv: any, playerFallSpeed: number) {
    
        let playerDim: DOMRect = GameEngine.getSpriteDim(playerDiv);
    
        let playerY: number = playerDim.top;

        playerDiv.style.top = playerY + playerFallSpeed + "px";
    }

    public static playerJump(playerDiv: any, playerJumpHeight: number) {

        let playerDim: DOMRect = GameEngine.getSpriteDim(playerDiv);

        let playerY: number = playerDim.top;

        playerDiv.style.top = playerY - playerJumpHeight + "px";
    }

    // ########################################### SCORE ###########################################

    public static updateScore(obstacle1Div: any, obstacle2Div: any, obstacle3Div: any, playerDiv: any) {

        let pipesFirstDim: DOMRect = GameEngine.getSpriteDim(obstacle1Div);
        let pipesSecondDim: DOMRect = GameEngine.getSpriteDim(obstacle2Div);
        let pipesThirdDim: DOMRect = GameEngine.getSpriteDim(obstacle3Div);
        let playerDivDim: DOMRect = GameEngine.getSpriteDim(playerDiv);

        if(pipesFirstDim.left + pipesFirstDim.width === playerDivDim.right - playerDivDim.width ||
            pipesSecondDim.left + pipesSecondDim.width === playerDivDim.right - playerDivDim.width ||
            pipesThirdDim.left + pipesThirdDim.width === playerDivDim.right - playerDivDim.width) {

            return true
        }
        return false
    }
}


