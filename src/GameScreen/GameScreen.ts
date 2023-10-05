import { BehaviorSubject } from 'rxjs';
import Frame from '../Frame/Frame.ts';
import FrameSource from '../FrameSource/FrameSource.ts'

// Responsible for swapping frames over time 
class GameScreen {
    public currentFrameSubject: BehaviorSubject<Frame>;
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
        this.currentFrameSubject = new BehaviorSubject<Frame>(this.currentFrame);
    }

    public turnOn(): void {
        this.isOn = true;
        this.refresh(this.frameSource.getNextFrame());
        let date = new Date();
        let time = date.getTime();
        setInterval(() => {
            this.refresh(this.frameSource.getNextFrame());
            let newTime = new Date().getTime();
            console.log("Time " + (newTime - time));
            time = newTime;
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
        this.frameSource.drawObjects(1);
        this.currentFrame = frame;
        this.currentFrameSubject.next(this.currentFrame);
    }
}

export default GameScreen