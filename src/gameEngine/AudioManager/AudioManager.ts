
import { SoundEffect } from "./SoundEffect";

//class for managing all the sound files
export class AudioManager{

    //holds all the loaded audio files
    private static soundEffects: {[sfx: string]: SoundEffect} = {};

    /*
    loads the audio file
    @Param sfx: sfx name for the audio file for when you want to play or stop it.
    @param audioPath: path to the audio file.
    @param loop: if the file should loop or played once. 
    */
    public static loadAudioFile(sfx: string, audioPath: string, loop: boolean, volume: number): void{
        AudioManager.soundEffects[sfx] = new SoundEffect(audioPath, loop, volume);
    }

    /*
    plays the select audio file.
    @param sfx: sfx of the audio file youn want to play.
    */
    public static playAudio(sfx: string): void {
        if(AudioManager.soundEffects[sfx] != null){
            AudioManager.soundEffects[sfx].play();
        }
    }

    /*
    stops the select audio file.
    @param sfx: sfx of the audio file you want to stop.
    */
    public static stopAudio(sfx: string): void {
        if(AudioManager.soundEffects[sfx] != null){
            AudioManager.soundEffects[sfx].stop();
            
        }
    }

    /*
    sets volume of a audio element
    @param sfx: sfx of the audio file you want to change the volume of.
    @param value: value that the volume should be changed to. should be between 0 and 1.
    */
    public static setVolume(sfx: string, value: number): void {
        if(AudioManager.soundEffects[sfx] != null){      
            AudioManager.soundEffects[sfx].volume = value;
        }
    }

    /*
    sets volume of a audio element
    @param sfx: sfx of the audio file you want to set loop of.
    @param loop: set the loop of the audio file. if it should be repeated or played once
    */
    public static setLoop(sfx: string, loop: boolean): void {
        if(AudioManager.soundEffects[sfx] != null){      
            AudioManager.soundEffects[sfx].loop = loop;
        }
    }

}