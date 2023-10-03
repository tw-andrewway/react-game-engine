import Position from "./Position";
import Frame from "../Frame/Frame";

class GameObject {
    private position: Position;
    private width: number;
    private height: number;
    protected frame: Frame;

    constructor(width: number, height: number) {
        this.position = new Position(0,0);
        this.width = width;
        this.height = height;
        this.frame = new Frame(width, height);
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position) {  
        this.position = position;
    }

    public getHeight(): number {
        return this.height
    }

    public getWidth(): number {
        return this.width
    }

    public getFrame(): Frame {
        return this.frame;
    }

    protected setFrame(frame: Frame): void { 
        this.frame = frame;
    }
}

export default GameObject;