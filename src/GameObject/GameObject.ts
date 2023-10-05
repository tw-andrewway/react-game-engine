import Position from "./Position";
import Frame from "../Frame/Frame";

class GameObject {
    private position: Position;
    private speedY: number = 0;
    private speedX: number = 0;
    private mass: number;
    private width: number;
    private height: number;
    protected frame: Frame;

    constructor(width: number, height: number, mass: number) {
        this.position = new Position(0,0);
        this.width = width;
        this.height = height;
        this.frame = new Frame(width, height);
        this.mass = mass;
    }

    public setInMotion(deltaT: number, boundaryX: number, boundaryY: number) {
        this.position.x += Math.ceil(this.speedX*deltaT);
        this.position.y += Math.ceil(this.speedY*deltaT);

        if(this.position.x < 0) {
            this.position.x = 0;
            this.speedX = -this.speedX;
        } else if(this.position.x > boundaryX) {
            this.position.x = boundaryX;
            this.speedX = -this.speedX;
        }

        if(this.position.y < 0) {
            this.position.y = 0;
            this.speedY = -this.speedY;
        } else if(this.position.y > boundaryY) {
            this.position.y = boundaryY;
            this.speedY = -this.speedY;
        }
    }

    public setVelocity(speedX: number, speedY: number) {
        this.speedX = speedX;
        this.speedY = speedY;
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position) {  
        this.position = position;
    }

    public getSpeedX(): number {
        return this.speedX;
    }

    public getSpeedY(): number {
        return this.speedY;
    }

    public exertForce(forceX: number, forceY: number, timeDelta: number) {
        this.speedX = (forceX/this.mass) * timeDelta + this.speedX;
        this.speedY = (forceY/this.mass) * timeDelta + this.speedY;
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

    public collide(object: GameObject) {
        let frame = this.getFrame();
        let otherFrame = object.getFrame();

        let center = frame.getCenter();
        let otherCenter = object.getFrame().getCenter();

        let topRightCorner = { 
            x: this.position.x + frame.getWidth(),
            y: this.position.y
        };

        let topLeftCorner = { 
            x: this.position.x,
            y: this.position.y
        };

        let bottomRightCorner = { 
            x: this.position.x + frame.getWidth(),
            y: this.position.y - frame.getHeight()
        };

        let bottomLeftCorner = { 
            x: this.position.x,
            y: this.position.y - frame.getHeight()
        };


        let otherTopRightCorner = { 
            x: object.position.x + frame.getWidth(),
            y: object.position.y
        };

        let otherTopLeftCorner = { 
            x: object.position.x,
            y: object.position.y
        };

        let otherBottomRightCorner = { 
            x: object.position.x + frame.getWidth(),
            y: object.position.y - frame.getHeight()
        };

        let otherBottomLeftCorner = { 
            x: object.position.x,
            y: object.position.y - frame.getHeight()
        };

        if(topRightCorner.x > otherTopLeftCorner.x 
            && topRightCorner.x < otherTopRightCorner.x
            && (topRightCorner.y < topRightCorner.y 
                && topRightCorner.y > otherBottomRightCorner.y)) {
                    // Collision 
                    this.speedX = -this.speedX;
                    object.speedX = -object.speedX;
            }
    }
}

export default GameObject;