import React from 'react';

export const birdPhysics = (sprite: string) => {

    function moveY() {

        var id: any = document.getElementById(sprite);
    
        var rect = id.getBoundingClientRect();
      
        var y: number = rect.top;
    
        // Bird fall speed
        if (y <= 378) {
    
            id.style.top = y + 1 + "px";
        }
    
        // Bottom pseudo-collision, to be fixed
        if (y >= 378) {
    
            id.style.top = 3 + "px";
        }
    }
    
    setInterval(moveY, 1000/60)

    function control(e: any) {

        // Checks or spacebar release
        if (e.keyCode === 32) {

            jump()
        }
    }

    function jump() {

        var id: any = document.getElementById(sprite);
    
        var rect = id.getBoundingClientRect();
      
        var y: number = rect.top;

        if (y <= 378) {
    
            id.style.top = y - 80 + "px";
        }
    }

    document.addEventListener('keypress', control)
    
    
}