import gameOverpng from '../assets/sprites/gameover.png'

function GameOverScreen (){

    const pStyle = {color: '##ffad33', fontFamily: 'Trebuchet MS'}

    return (
        <div id="gameover" style= {{
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
            <p style = {pStyle}>Score: 34 </p>
 
            <button id="playAgain">Play Again</button>
        </div>
    )
    
}

export default GameOverScreen;