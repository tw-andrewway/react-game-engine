import Pixel from '../Pixel';
import GameScreen from './GameScreen';

class GameScreenFactory {
    private data: any;

    constructor(data: any) {
        this.data = data;
    }

    public createScreen(width: number, height: number): GameScreen {
        let screen = new GameScreen(width, height);
        const pixelSet: Pixel[][] = [];
        let x = 0;
        let y = 0;
        for (let i = 0; i + 4 < this.data.length; i += 4) {
            const pixel: Pixel = new Pixel(
                this.data[i],
                this.data[i + 1],
                this.data[i + 2],
                this.data[i + 3]
            );
            pixelSet[x][y] = pixel;
            x++;
            if(x > width) {
                x = 0;
                y++;
            }
        }
        screen.setPixelSet(pixelSet);

        return screen
    }
}

export default GameScreenFactory