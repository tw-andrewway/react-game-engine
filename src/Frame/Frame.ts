import Pixel from '../Pixel';

class Frame {
    private frameData: Pixel[][];

    constructor(width: number, height: number) {
        this.frameData = new Array(width);
        for (let i = 0; i < width; i++) {
            this.frameData[i] = new Array(height);
        }

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++){
                this.frameData[i][j] = new Pixel(0, 0, 0, 0);
            }
        }
    }

    public getFrameData(): Pixel[][] {
        return this.frameData;
    }

    public setPixel(x: number, y: number, pixel: Pixel): void {
        this.frameData[x][y] = pixel;
    }
}

export default Frame;