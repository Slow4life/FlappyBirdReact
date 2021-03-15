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
    let playerDim: DOMRect = GameEngine.getSpriteDim(playerDiv);
    const theoreticalPlayerHeight = playerDim.height;
    const obstacleDim1: DOMRect = GameEngine.getSpriteDim(obstacle1Div);
    const obstacleDim2: DOMRect = GameEngine.getSpriteDim(obstacle2Div);
    const groundDim: DOMRect = GameEngine.getSpriteDim(groundDiv);
    /*


    // const practicalPlayerHeight = theoreticalPlayerHeight * 0.9;    // 0.9 = hardcoded calibration, not optimal
    // playerDim.height = practicalPlayerHeight;

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

    public static obstacleMovement(obstaclesFirst: any, obstaclesSecond: any, obstaclesThird: any,
         lowerFirst: any, upperFirst: any, lowerSecond: any, upperSecond: any,
          lowerThird: any, upperThird: any, gameWindow: any, moveSpeed: number,
          obstacleResetDistance: number, randomRange: number, obstacleGap: number) {

        let bottomY = Math.random() * randomRange;
        let gap = obstacleGap;

        let obstacleDimFirst: DOMRect = GameEngine.getSpriteDim(obstaclesFirst);
        let obstacleDimSecond: DOMRect = GameEngine.getSpriteDim(obstaclesSecond);
        let obstacleDimThird: DOMRect = GameEngine.getSpriteDim(obstaclesThird);
        let gameWindowDim: DOMRect = GameEngine.getSpriteDim(gameWindow);
        let obstacleDim: DOMRect = GameEngine.getSpriteDim(lowerFirst);

        let firstX: number = obstacleDimFirst.left;
        let secondX: number = obstacleDimSecond.left;
        let thirdX: number = obstacleDimThird.left;

        obstaclesFirst.style.left = firstX - moveSpeed + "px";
        obstaclesSecond.style.left = secondX - moveSpeed + "px";
        obstaclesThird.style.left = thirdX - moveSpeed + "px"; 

        if (obstacleDimFirst.left < gameWindowDim.left - obstacleDim.width) { 

            obstaclesFirst.style.left = obstacleResetDistance + "px";
            lowerFirst.style.bottom = bottomY + "px";
            upperFirst.style.bottom = bottomY + gap + "px";
        }
        if (obstacleDimSecond.left < gameWindowDim.left - obstacleDim.width) {
            
            obstaclesSecond.style.left = obstacleResetDistance + "px"; 
            lowerSecond.style.bottom = bottomY + "px";
            upperSecond.style.bottom = bottomY + gap + "px";
        }

        if (obstacleDimThird.left < gameWindowDim.left - obstacleDim.width) { 
            
            obstaclesThird.style.left = obstacleResetDistance + "px"; 
            lowerThird.style.bottom = bottomY + "px";
            upperThird.style.bottom = bottomY + gap + "px";
        }
    }

    // ########################################### PLAYER MOVEMENT ###########################################

    public static gravity(element: any, gravityAmount: number) {
    
        let elementDim: DOMRect = GameEngine.getSpriteDim(element);
    
        let elementY: number = elementDim.top;

        element.style.top = elementY + gravityAmount + "px";
    }

    public static elementJump(element: any, jumpHeight: number) {

        let elementDim: DOMRect = GameEngine.getSpriteDim(element);

        let elementY: number = elementDim.top;

        element.style.top = elementY - jumpHeight + "px";
    }

    // ########################################### SCORE ###########################################

    public static updateScore(obstacle1Div: any, obstacle2Div: any, obstacle3Div: any, playerDiv: any) {

        let obstacleFirstDim: DOMRect = GameEngine.getSpriteDim(obstacle1Div);
        let obstacleSecondDim: DOMRect = GameEngine.getSpriteDim(obstacle2Div);
        let obstacleThirdDim: DOMRect = GameEngine.getSpriteDim(obstacle3Div);
        let playerDivDim: DOMRect = GameEngine.getSpriteDim(playerDiv);

        if(obstacleFirstDim.left + obstacleFirstDim.width === playerDivDim.right - playerDivDim.width ||
            obstacleSecondDim.left + obstacleSecondDim.width === playerDivDim.right - playerDivDim.width ||
            obstacleThirdDim.left + obstacleThirdDim.width === playerDivDim.right - playerDivDim.width) {

            return true
        }
        return false
    }
}


