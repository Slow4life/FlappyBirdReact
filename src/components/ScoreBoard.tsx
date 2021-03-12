import { disconnect } from 'node:process'
import React from 'react'

function ScoreBoard(){

    const scoreStyle = {
        fontFamly:'Trebuchet MS',
        zIndex: 20000
    }

    return(
        <div style={scoreStyle}>score: 3</div>
        )
}

export default ScoreBoard