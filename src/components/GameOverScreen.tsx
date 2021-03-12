import React from 'react'
import gameOverpng from '../assets/sprites/gameover.png'
import flappyFont from '../assets/font/FlappyBirdy.woff'

function GameOverScreen (){

    const pStyle = {color: 'white',
                   }

    return (
        <div style= {{
            position: 'absolute',
            height: 200,
            bottom: 200,
            left: '25%',
            width: '50%',
            zIndex: 2000,
            border: '5px green',
            padding: 3,
            margin: 5
            }}>
            <img src={gameOverpng}></img>
            <p style = {pStyle}> your score was</p>
            <p style = {pStyle}>3</p>
            <button>play again</button>
        </div>
    )
    
}

export default GameOverScreen;