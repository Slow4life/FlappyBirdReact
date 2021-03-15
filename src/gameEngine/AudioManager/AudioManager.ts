
import { SoundEffect } from "./SoundEffect";

//class for managing all the sound files
export class AudioManager{

    //holds all the loaded audio files
    private static soundArray: {[sfx: string]: SoundEffect} = {};

    /*
    loads the audio file
    @Param sfx: sfx for the audio file for when you want to play or stop.
    @param audioPath: path to the audio file.
    @param loop: if the file should loop or played once. 
    */
    public static loadAudioFile(sfx: string, audioPath: string, loop: boolean, volume: number): void{
        AudioManager.soundArray[sfx] = new SoundEffect(audioPath, loop, volume);
    }

    /*
    plays the select audio file.
    @param sfx: sfx of the audio file youn want to play.
    */
    public static playAudio(sfx: string): void {
        if(AudioManager.soundArray[sfx] !== null){
            AudioManager.soundArray[sfx].play();
        }
    }

    /*
    stops the select audio file.
    @param sfx: sfx of the audio file you want to stop.
    */
    public static stopAudio(sfx: string): void {
        if(AudioManager.soundArray[sfx] !== null){
            AudioManager.soundArray[sfx].stop();
        }
    }

    /*
    sets volume of a audio element
    @param sfx: sfx of the audio file you want to change the volume of.
    @param volume: value that the volume should be changed to. should be between 0 and 1.
    */
    public static setVolume(sfx: string, volume: number): void {
        if(AudioManager.soundArray[sfx] !== null){      
            AudioManager.soundArray[sfx].volume = volume;
        }
        
    }
}