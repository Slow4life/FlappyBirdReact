export const collisionObstacle1 = (playerSprite: string, obstacle1Sprite: string, obstacle2Sprite: string) => {

    function collide() {

        var player: any = document.getElementById(playerSprite);

        var obstacle1: any = document.getElementById(obstacle1Sprite);

        var obstacle2: any = document.getElementById(obstacle2Sprite);
    
        var playerDim = player.getBoundingClientRect();

        var obstacleDim1 = obstacle1.getBoundingClientRect();

        var obstacleDim2 = obstacle2.getBoundingClientRect();

        console.log(obstacleDim1.top)
        
        if (playerDim.right >= obstacleDim1.left && playerDim.left <= obstacleDim1.right && playerDim.bottom >= obstacleDim1.top) {

            console.log("lower collision")
        }

        if (playerDim.right >= obstacleDim2.left && playerDim.left <= obstacleDim2.right && playerDim.top <= obstacleDim2.bottom) {

            console.log("upper collision")
        }
    }
    
    setInterval(collide, 1000/60)
}



