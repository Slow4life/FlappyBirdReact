
export class SoundEffect {
    private _player: HTMLAudioElement;

    //public assetPath: string;

    public constructor(assetPath: string, loop: boolean){
        this._player = new Audio(assetPath);
        this._player.loop = loop;
        this._player.crossOrigin="anonymous";
    }

    public get loop(): boolean{
        return this._player.loop;
    }

    public set loop(value: boolean){
        this._player.loop = value;
    }

    public play(): void {
        this._player.play();
    }

    public stop(): void {
        this._player.pause();
        this._player.currentTime = 0;
    }
}

export class AudioManager{

    private static _soundEffects: {[name: string]: SoundEffect} = {};

    public static loadAudioFile(name: string, audioPath: string, loop: boolean): void{
        AudioManager._soundEffects[name] = new SoundEffect(audioPath, loop);
    }

    public static playSound(name: string): void {
        if(AudioManager._soundEffects[name] !== undefined){
            AudioManager._soundEffects[name].play();
        }
    }

    public static stopSound(name: string): void {
        if(AudioManager._soundEffects[name] !== undefined){
            AudioManager._soundEffects[name].stop();
        }
    }



}