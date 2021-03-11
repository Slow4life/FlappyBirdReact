import React from 'react';

interface pipe {
 obstacleWidth: any 
 obstacleHeight: any
 randomBottom: any
 gap: any 
 obstaclesLeft: any
 bgImage1:any;
 bgImage2: any; 
}

const Obstacles = ({
    bgImage1,
    bgImage2, 
    obstacleWidth, 
    obstacleHeight, 
    randomBottom, 
    gap, 
    obstaclesLeft}: pipe) => {

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundImage: `url(${bgImage1})`,
                width: obstacleWidth,
                height: 500,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}></div>
            <div style={{
                 backgroundImage: `url(${bgImage2})`,
                position: 'absolute',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}></div>
        </>
    )
}

export default Obstacles