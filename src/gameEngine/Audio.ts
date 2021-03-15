
/*class for individual sound effects
*/
export class SoundEffect {
    private sound: HTMLAudioElement;
   
    /*creating the sound effect
    @param assetPath: path to the audio file.
    @param loop: if the file should loop or played once.
    */
    public constructor(assetPath: string, loop: boolean, volume: number){
        this.sound = new Audio(assetPath);
        this.sound.loop = loop;
        this.sound.volume = volume
        this.sound.crossOrigin="anonymous";
    }

    //getter for the loop
    public get loop(): boolean{
        return this.sound.loop;
    }

    //setter for if the sound effect should loop or not
    public set loop(value: boolean){
        this.sound.loop = value;
    }

    public play(): void {
        if (!this.sound.paused) {
            this.stop();
        }
        this.sound.play();
    }

    public stop(): void {
        this.sound.pause();
        this.sound.currentTime = 0;
    }

    //get volume of sound effect
    public get volume(): number{
        return this.sound.volume;
    }

    //set the volume of sound effect
    public set volume(value: number){
        this.sound.volume = value;
    }

    
}

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
    public static setVolume(sfx: string, volume: number){
        if(AudioManager.soundArray[sfx] !== null){      
            AudioManager.soundArray[sfx].volume = volume;
        }
        
    }
}