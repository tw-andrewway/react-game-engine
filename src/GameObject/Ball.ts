import GameObject from "./GameObject"
import Frame from "../Frame/Frame";
import Pixel from "../Pixel";

class Ball extends GameObject {
    constructor(width: number, height: number) {
        super(width, height)

        this.frame = new Frame(this.getWidth(), this.getHeight());

        for (let i = 0; i < this.getWidth(); i++) {
            for (let j = 0; j < this.getHeight(); j++){
                this.frame.setPixel(i, j, new Pixel(255, 255, 255, 255));
            }
        }
    }
}

export default Ball;