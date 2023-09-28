import Frame from "../Frame/Frame";

abstract class FrameSource {
    frameCount : number;

    constructor(frameCount: number) {
        this.frameCount = frameCount;
    }
    abstract getNextFrame(currentFrame): Frame 
}

export default FrameSource