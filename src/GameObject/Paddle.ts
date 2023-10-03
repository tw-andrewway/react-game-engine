import GameObject from "./GameObject";
import Frame from "../Frame/Frame";
import Pixel from "../Pixel";

class Paddle extends GameObject {
    constructor() {
        super(10, 50)
        
        let frame = new Frame(this.getWidth(), this.getHeight());

        for (let i = 0; i < this.getWidth(); i++) {
            for (let j = 0; j < this.getHeight(); j++){
                frame.setPixel(i, j, new Pixel(255, 255, 255, 255));
            }
        }
    }
}

export default Paddle;