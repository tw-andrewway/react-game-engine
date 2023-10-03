import Frame from "../Frame/Frame";
import GameObject from "../GameObject/GameObject";

// Responsible for drawing the frames
class FrameSource {
    frameCount : number;
    currentFrame: Frame
    protected objects: GameObject[];

    constructor(width: number, height: number) {
        this.frameCount = 0;
        this.objects = new Array<GameObject>();
        this.currentFrame = new Frame(width, height);
    }

    public getObjects(): GameObject[] {
        return this.objects;
    }

    public addObject(object: GameObject): void {
        this.objects.push(object);
    }

    public getNextFrame(): Frame {
        return this.currentFrame;
    }

    public drawObjects() {
        this.objects.forEach((object) => {
            const position = object.getPosition();
            const objectPixels = object.getFrame().getFrameData();
            const objectX = position.x
            const objectY = position.y
            for(let i=0; i< objectPixels.length; i++) {
                for (let j = 0; j < objectPixels[i].length; j++) {
                    const pixel = objectPixels[i][j];
                    this.currentFrame.setPixel(objectX+i, objectY+j, pixel);
                }
            }
        })
    }
}

export default FrameSource