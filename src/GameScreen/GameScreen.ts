import Pixel from '../Pixel';
import Frame from '../Frame/Frame';
import FrameSource from '../FrameSource/FrameSource'

// Responsible for swapping frames over time 
class GameScreen {
    private currentFrame: Frame;
    private isOn: boolean = false;
    private width: number;
    private height: number;

    public lastRefreshTime : number = 0;
    public frameRate = 30; // 30 frames per second
    public timeBetweenRefreshes : number = 1000/this.frameRate;
    public frameSource: FrameSource;

    constructor(
        width: number, 
        height: number,
        frameSource: FrameSource) {
        this.width = width;
        this.height = height;
        this.currentFrame = new Frame(width, height);
        this.frameSource = frameSource;
    }

    public turnOn(): void {
        this.isOn = true;
        this.refresh(this.frameSource.getNextFrame(this.currentFrame));
        setInterval(() => {
            this.refresh(this.frameSource.getNextFrame(this.currentFrame));
        }, this.timeBetweenRefreshes);
    }

    public turnOff(): void {
        this.currentFrame = new Frame(this.width, this.height);
        this.isOn = false;
    }

    public getFrame(): Frame {
        return this.currentFrame;
    }

    private refresh(frame: Frame): void {
        if(!this.isOn) return;
        this.currentFrame = frame;
    }
}

export default GameScreen