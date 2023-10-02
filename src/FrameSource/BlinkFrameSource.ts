import FrameSource from "./FrameSource.ts";
import Frame from '../Frame/Frame.ts'
import Pixel from '../Pixel.ts';

class BlinkFrameSource extends FrameSource {
    currentFrame: Frame;
    width: number;
    height: number;
    private s = 97;
    private r = 218;
    private g = 251;
    private b = 255;
    private increment = 10;
    private coeff = 1;

    constructor(width: number, height: number) {
        super(0)
        this.width = width;
        this.height = height;
        this.currentFrame = new Frame(width, height);
    }

    getNextFrame() {
        this.modifyFrame();
        return this.currentFrame;
    }

    private modifyFrame() {
        for(let i=0; i<this.currentFrame.getWidth(); i++) {
            for(let j=0; j<this.currentFrame.getHeight(); j++) {
                this.currentFrame.setPixel(i, j, new Pixel(
                    this.s, 
                    this.r, 
                    this.g, 
                    this.b))
            }
        }
        this.b += this.coeff*this.increment;
        this.g += this.coeff*this.increment;

        if(this.b < 20 || this.g < 20) {
            this.coeff *= -1;
        } else if(this.b > 255 || this.g > 255) {
            this.coeff *= -1;
        }
    }
}

export default BlinkFrameSource