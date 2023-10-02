import GameScreen from './GameScreen';
import Frame from '../Frame/Frame'
import Pixel from '../Pixel';
import FrameSource from '../FrameSource/FrameSource';

class TestFrameSource extends FrameSource {
  getNextFrame(currentFrame) {
    return currentFrame;
  }
}

jest.useFakeTimers();

let gameScreen;
beforeEach(() => {
  gameScreen = new GameScreen(100,100, new TestFrameSource())
})

test('can create a game screen', () => {
  expect(gameScreen).toBeDefined();
});

test('game screen can accept a frame', () => {
  gameScreen.refresh(new Frame(50,50))
  expect(gameScreen.getFrame().getFrameData().length).toBe(100);
})

test('can turn on and initialize with empty frame', () => {
  gameScreen.turnOn()
  let currentFrame = gameScreen.getFrame().getFrameData()
  expect(currentFrame[0][0]).toStrictEqual(new Pixel(0,0,0,0));
})

test('can refresh with a frame', async () => {
  gameScreen = new GameScreen(100, 100, new class extends FrameSource {
    constructor() {
      super(0);
    }

    getNextFrame(currentFrame) {
      if(this.frameCount == 0) {
        this.frameCount++;
        return currentFrame;
      } else {
        this.frameCount++;
        let nextFrame = new Frame(100,100)
        nextFrame.setPixel(0,0, new Pixel(1,1,1,1))
        return nextFrame;
      }

    }
  })
  gameScreen.turnOn()
  let currentFrame = gameScreen.getFrame().getFrameData()
  expect(currentFrame[0][0]).toStrictEqual(new Pixel(0,0,0,0));

  setTimeout(() => {
    currentFrame = gameScreen.getFrame().getFrameData()
    expect(currentFrame[0][0]).toStrictEqual(new Pixel(1,1,1,1));
  }, 1000)
  jest.runOnlyPendingTimers();

})

test('can emit frame', () => {
  
})