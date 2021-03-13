import gameOverpng from '../assets/sprites/gameover.png'
import playButton from '../assets/sprites/playButton.png'

function GameOverScreen (){

    const pStyle = {color: '##ffad33', fontFamily: 'Trebuchet MS'}
    const buttonStyle = { background: `url(${playButton}) no-repeat 5px center`,
                          width: 64,
                          height: 36,
                          border: 'none',
                          backgroundSize: 'cover' }

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
            margin: 5,
            backgroundColor: "#ffe5b4",
             borderRadius: 25
            }}>
            <img src={gameOverpng}></img>
            <div id="deathScore" style = {pStyle}>Score: </div>
            <div id="highScore" style = {pStyle}>Score: </div>
 
            <button style={buttonStyle} id="playAgain"></button>
        </div>
    )
    
}

export default GameOverScreen;