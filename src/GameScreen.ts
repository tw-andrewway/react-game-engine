import Pixel from './Pixel';

class GameScreen {
    private pixelSet: Pixel[][];
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.pixelSet = new Array(width);
        for (let i = 0; i < width; i++) {
            this.pixelSet[i] = new Array(height);
        }
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getPixelSet(): Pixel[][] {
        return this.pixelSet;
    }

    public setPixelSet(matrix: Pixel[][]): void {
        this.pixelSet = matrix;
    }

    public setPixel(x: number, y: number, pixel: Pixel): void {
        this.pixelSet[x][y] = pixel;
    }
}

export default GameScreen