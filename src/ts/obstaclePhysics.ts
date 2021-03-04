import React from 'react';

export const obstaclePhysics = (sprite: string) => {

    function moveX() {

        var id: any = document.getElementById(sprite);
    
        var rect = id.getBoundingClientRect();
        
        var x: number = rect.left;

        id.style.left = x - 6.8 + "px";
    
    }
    
    setInterval(moveX, 1000/60)
}