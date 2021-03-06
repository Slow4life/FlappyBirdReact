import React,  {KeyboardEvent, MouseEvent} from 'react';
import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import Pipes from './pipes';
import { birdPhysics } from "../ts/playerPhysics";
import { obstaclePhysics } from "../ts/obstaclePhysics";
import { AudioManager } from "../ts/AudioManager";

birdPhysics("playerSprite");
obstaclePhysics("pipes");

const Flappybird = (props:any) =>{
    AudioManager.loadAudioFile("jump", "/audio/wing.ogg", false);
    AudioManager.loadAudioFile("die", "/audio/die.ogg", false);
    const playSoundJump = () => {
        //audio.play();
        AudioManager.playSound("jump");
    }
    const playSoundDie = () => {
        //audio.play();
        AudioManager.playSound("die");
    }
 
    return(
        
        <div id='gameWindow'>
            <a href="#" onClick={playSoundJump}>
                jump
            </a>
            <a href="#" onClick={playSoundDie}>
                die
            </a>
                <Scrollingbase/>
                <div id='playerSprite'><PlayerSprite/></div>
                <div id='pipes'><Pipes/></div>
        </div>
    );
}

export default Flappybird;