/*class for individual sound effects
* the audio manager calls this class to create a HTMLAduioElement
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
    }

    //getter for the loop
    public get loop(): boolean{
        return this.sound.loop;
    }

    //setter for if the sound effect should loop or not
    public set loop(value: boolean){
        this.sound.loop = value;
    }

    // plays the sound effect if the sound effect is being played
    // it will be reset before being played again
    public play(): void {
        if (!this.sound.paused) {
            this.stop();
        }
        this.sound.play();
    }

    //pauses the sound effect and resets it.
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
