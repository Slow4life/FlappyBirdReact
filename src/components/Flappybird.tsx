import React from 'react';
import Scrollingbase from "./scrollingbase";
import PlayerSprite from './birdSprite';
import { birdPhysics } from "../physics";

birdPhysics("playerSprite");

const Flappybird = (props:any) =>{
    return(
        <div id='gameWindow'>
                <Scrollingbase/>
                <div id='playerSprite'><PlayerSprite/></div>
        </div>
    )
}

export default Flappybird;