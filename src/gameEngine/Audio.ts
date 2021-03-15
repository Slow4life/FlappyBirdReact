
/*class for individual sound effects
*/
export class SoundEffect {
    private _player: HTMLAudioElement;
   
    /*creating the sound effect
    @param assetPath: path to the audio file.
    @param loop: if the file should loop or played once.
    */
    public constructor(assetPath: string, loop: boolean){
        this._player = new Audio(assetPath);
        this._player.loop = loop;
        this._player.crossOrigin="anonymous";
    }

    //getter for the loop
    public get loop(): boolean{
        return this._player.loop;
    }

    //setter for if the sound effect should loop or not
    public set loop(value: boolean){
        this._player.loop = value;
    }

    public play(): void {
        if (!this._player.paused) {
            this.stop();
        }
        this._player.play();
    }

    public stop(): void {
        this._player.pause();
        this._player.currentTime = 0;
    }
}

//class for managing all the sound files
export class AudioManager{

    //holds all the loaded audio files
    private static _soundEffects: {[name: string]: SoundEffect} = {};

    /*
    loads the audio file
    @Param name: name for the audio file for when you want to play or stop.
    @param audioPath: path to the audio file.
    @param loop: if the file should loop or played once. 
    */
    public static loadAudioFile(name: string, audioPath: string, loop: boolean): void{
        AudioManager._soundEffects[name] = new SoundEffect(audioPath, loop);
    }

    /*
    plays the select audio file.
    @param name: name of the audio file youn want to play.
    */
    public static playAudio(name: string): void {
        if(AudioManager._soundEffects[name] !== undefined){
            AudioManager._soundEffects[name].play();
        }
    }

    /*
    stops the select audio file.
    @param name: name of the audio file you want to stop.
    */
    public static stopAudio(name: string): void {
        if(AudioManager._soundEffects[name] !== undefined){
            AudioManager._soundEffects[name].stop();
        }
    }
}