import Pixel from '../Pixel.ts';

class Frame {
    private frameData: Pixel[][];
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.frameData = new Array(width);
        for (let i = 0; i < width; i++) {
            this.frameData[i] = new Array(height);
        }

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++){
                this.frameData[i][j] = new Pixel(255, 69, 69, 69);
            }
        }
    }

    public getFrameData(): Pixel[][] {
        return this.frameData;
    }

    public setPixel(x: number, y: number, pixel: Pixel): void {
        this.frameData[x][y] = pixel;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getCenter() : any {
        return {
            x: Math.floor(this.width/2),
            y: Math.floor(this.height/2)
        }
    }
}

export default Frame;