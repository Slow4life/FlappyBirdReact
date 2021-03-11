export const GameEngine = (playerSprite: string, obstacle1Sprite: string, obstacle2Sprite: string, score: string, groundDiv: string, jumpKey: number) => {

// ########################################### COLLISION ###########################################

    function collide() {

        let player: any = document.getElementById(playerSprite);

        let obstacle1: any = document.getElementById(obstacle1Sprite);
            // Risikomoment:
            // getElementById() forutsetter at id er entydig, men det er den ikke.
            // Dette kan gå i stykker når som helst, eller i andre browsere.
            // getElementByClass()[0] er en mulighet, men jeg er fortsatt litt usikker på
            // om det nødvendigvis finner den rette?

        let obstacle2: any = document.getElementById(obstacle2Sprite);
    
        let playerDim = player.getBoundingClientRect();

        let obstacleDim1 = obstacle1.getBoundingClientRect();

        let obstacleDim2 = obstacle2.getBoundingClientRect();
        
        if (playerDim.right >= obstacleDim1.left && playerDim.left <= obstacleDim1.right && playerDim.bottom >= obstacleDim1.top) {

            gameOver();
        }

        if (playerDim.right >= obstacleDim2.left && playerDim.left <= obstacleDim2.right && playerDim.top <= obstacleDim2.bottom+100) {

            gameOver();
        }
    }

    // ########################################### PLAYER MOVEMENT ###########################################

    addJumpListener();

    function moveY() {

        let id: any = document.getElementById(playerSprite);

        let ground: any = document.getElementById(groundDiv); // ID of ground
    
        let rect = id.getBoundingClientRect();

        let groundDim = ground.getBoundingClientRect();
    
        let birdY: number = rect.top;

        let groundY: number = groundDim.top - 25 // 25 = calibration, not optimal
    
        console.log(groundY)

        id.style.top = birdY + 3/20 + "px";

        // Bird fall speed
        if (birdY >= groundY) {
    
            clearInterval(playerFall);
        }
    }

    function jump(e:any) {

        if (e.keyCode === jumpKey) {
            
            let id: any = document.getElementById(playerSprite);

            let groundId: any = document.getElementById(groundDiv);

            let rect = id.getBoundingClientRect();

            let groundDim = groundId.getBoundingClientRect();
        
            let y: number = rect.top;

            let groundY: number = groundDim.top - 25 // 25 = calibration, not optimal
    
            if (y <= groundY) { id.style.top = y - 70 + "px"; }}
    }

    function addJumpListener() {

        let jumpListener = document.addEventListener('keypress', jump); 
    }

    // ########################################### GAME ###########################################

    let scoreCounter: number = 0;

    /*
    function scoreBoard() {

        let player: any = document.getElementById(playerSprite);

        let check: any = document.getElementById(obstacle1Sprite);

        let playerDim = player.getBoundingClientRect();

        let checkDim = check.getBoundingClientRect();

        let scoreDiv = document.getElementById("score");

        if (playerDim.left > checkDim.right) {

            scoreCounter++;

            //scoreDiv.innerHTML = "asd";
        }
    }*/

    function removeJumpListener() {

        document.removeEventListener('keypress', jump)
    }

    function gameOver() {

        removeJumpListener();
        clearInterval(collisionCheck);
    }

    // Runs until collision is detected
    //let scoreInterval = setInterval(scoreBoard, 100/60)
    let playerFall = setInterval(moveY, 1000/60)
    let collisionCheck = setInterval(collide, 1000/60)
}


