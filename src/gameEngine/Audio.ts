
/*class for individual sound effects
*/
export class SoundEffect {
    private sound: HTMLAudioElement;
   
    /*creating the sound effect
    @param assetPath: path to the audio file.
    @param loop: if the file should loop or played once.
    */
    public constructor(assetPath: string, loop: boolean){
        this.sound = new Audio(assetPath);
        this.sound.loop = loop;
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
}

//class for managing all the sound files
export class AudioManager{

    //holds all the loaded audio files
    private static soundArray: {[name: string]: SoundEffect} = {};

    /*
    loads the audio file
    @Param name: name for the audio file for when you want to play or stop.
    @param audioPath: path to the audio file.
    @param loop: if the file should loop or played once. 
    */
    public static loadAudioFile(name: string, audioPath: string, loop: boolean): void{
        AudioManager.soundArray[name] = new SoundEffect(audioPath, loop);
    }

    /*
    plays the select audio file.
    @param name: name of the audio file youn want to play.
    */
    public static playAudio(name: string): void {
        if(AudioManager.soundArray[name] !== undefined){
            AudioManager.soundArray[name].play();
        }
    }

    /*
    stops the select audio file.
    @param name: name of the audio file you want to stop.
    */
    public static stopAudio(name: string): void {
        if(AudioManager.soundArray[name] !== undefined){
            AudioManager.soundArray[name].stop();
        }
    }
}