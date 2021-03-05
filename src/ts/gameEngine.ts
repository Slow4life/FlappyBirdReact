export const GameEngine = (playerSprite: string, obstacle1Sprite: string, obstacle2Sprite: string, bothObstacles: string, obstacleMoveSpeed: number) => {

// ########################################### COLLISION ###########################################

    function collide() {

        var player: any = document.getElementById(playerSprite);

        var obstacle1: any = document.getElementById(obstacle1Sprite);

        var obstacle2: any = document.getElementById(obstacle2Sprite);
    
        var playerDim = player.getBoundingClientRect();

        var obstacleDim1 = obstacle1.getBoundingClientRect();

        var obstacleDim2 = obstacle2.getBoundingClientRect();
        
        if (playerDim.right >= obstacleDim1.left && playerDim.left <= obstacleDim1.right && playerDim.bottom >= obstacleDim1.top) {

            console.log("lower collision")
            clearInterval(playerMove);
            clearInterval(collisionCheck);
        }

        if (playerDim.right >= obstacleDim2.left && playerDim.left <= obstacleDim2.right && playerDim.top <= obstacleDim2.bottom+100) {

            console.log("upper collision")
            clearInterval(playerMove);
            clearInterval(collisionCheck);
        }
    }

    // ########################################### OBSTACLE MOVEMENT ###########################################

    function moveX() {

        var id: any = document.getElementById(bothObstacles);
    
        var rect = id.getBoundingClientRect();
        
        var x: number = rect.left;

        id.style.left = x - obstacleMoveSpeed + "px";
    
    }

    // ########################################### PLAYER MOVEMENT ###########################################

    addJumpListener();

    function moveY() { 

        var id: any = document.getElementById(playerSprite);
    
        var rect = id.getBoundingClientRect();
    
        var y: number = rect.top;
    
        // Bird fall speed
        if (y <= 378) {
    
            id.style.top = y + 1 + "px";
        }
    }

    function control(e: any) {

        // Checks if press is Space bar press
        if (e.keyCode === 32) { jump() }
    }

    function jump() {

        var id: any = document.getElementById(playerSprite);
    
        var rect = id.getBoundingClientRect();
    
        var y: number = rect.top;

        if (y <= 378) {
    
            id.style.top = y - 80 + "px";
        }
    }
    
    function addJumpListener() {

        // Listens for Space bar press
        document.addEventListener('keypress', control)
    }

    // Runs until collision is detected
    var playerFall = setInterval(moveY, 1000/60)
    var playerMove = setInterval(moveX, 1000/60)
    var collisionCheck = setInterval(collide, 1000/60)
}

