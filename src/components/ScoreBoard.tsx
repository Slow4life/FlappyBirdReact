import { disconnect } from 'node:process'
import React from 'react'

function ScoreBoard(){


    return(
        <div id="scoreBoard" style={{

            position: 'absolute',
            zIndex: 2000,
    }}>Score: </div>
        )
}

export default ScoreBoard