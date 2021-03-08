export const GameEngine = (playerSprite: string, obstacle1Sprite: string, obstacle2Sprite: string, bothObstacles: string, obstacleMoveSpeed: number, jumpKey: number) => {

// ########################################### COLLISION ###########################################

    function collide() {

        var player: any = document.getElementById(playerSprite);

        var obstacle1: any = document.getElementById(obstacle1Sprite);

        var obstacle2: any = document.getElementById(obstacle2Sprite);
    
        var playerDim = player.getBoundingClientRect();

        var obstacleDim1 = obstacle1.getBoundingClientRect();

        var obstacleDim2 = obstacle2.getBoundingClientRect();
        
        if (playerDim.right >= obstacleDim1.left && playerDim.left <= obstacleDim1.right && playerDim.bottom >= obstacleDim1.top) {

            gameOver();
        }

        if (playerDim.right >= obstacleDim2.left && playerDim.left <= obstacleDim2.right && playerDim.top <= obstacleDim2.bottom+100) {

            gameOver();
        }
    }

    // ########################################### OBSTACLE MOVEMENT ###########################################
/*
    function moveX() {

        var pipeClass: any = document.getElementsByClassName(bothObstacles);
        
        
        
        
        Array.from(pipeClass).forEach((i:any) => {

            //var pipeQuery: any = document.querySelector('.pipesBoth');

            //for (let i = 0; i < pipeQuery.length; i++) {

                var pipeId: any = document.getElementById(pipeClass[i]);

                console.log(pipeClass[i]);

                var idDim = pipeId.getBoundingClientRect();

                var x: number = idDim.left;

                idDim.style.left = x + "px";
            }





    


        )}
*/
        
    
        //var rect = id.getBoundingClientRect();
        
        //var x: number = rect.left;

        //var boxLeftPos = id.offsetLeft;

        //boxLeftPos.style.left = boxLeftPos - obstacleMoveSpeed + "px";
    

    // ########################################### PLAYER MOVEMENT ###########################################

    addJumpListener();

    function moveY() {

        var id: any = document.getElementById(playerSprite);
    
        var rect = id.getBoundingClientRect();
    
        var y: number = rect.top;
    
        // Bird fall speed
        if (y <= 378) {
    
            id.style.top = y + 3/20 + "px";
        }
    }

    function jump(e:any) {

        if (e.keyCode === jumpKey) {
            
            var id: any = document.getElementById(playerSprite);

            var rect = id.getBoundingClientRect();
        
            var y: number = rect.top;
    
            if (y <= 378) { id.style.top = y - 70 + "px"; }}
    }

    function addJumpListener() {

        var jumpListener = document.addEventListener('keypress', jump); 
    }

    // ########################################### GAME ###########################################

    function removeJumpListener() {

        document.removeEventListener('keypress', jump)
    }
/*
    function movePipes() {

        while (true) {

            var pipeMove = setInterval(moveX, 1000/60)
            clearInter
        }
    }*/

    function gameOver() {

        removeJumpListener();
        //clearInterval(pipeMove);
        clearInterval(collisionCheck);

        return true;
    }

















    // Runs until collision is detected
    var playerFall = setInterval(moveY, 1000/60)
    //var pipeMove = setInterval(moveX, 1000/60)
    var collisionCheck = setInterval(collide, 1000/60)
}


