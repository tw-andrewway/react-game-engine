import GameScreen from './GameScreen';
import Ball from '../GameObject/Ball';
import Pixel from '../Pixel';
import FrameSource from '../FrameSource/FrameSource';

jest.useFakeTimers();

let gameScreen: GameScreen;
let frameSource: FrameSource;

beforeEach(() => {
  frameSource = new FrameSource(10,10)
  gameScreen = new GameScreen(10,10, frameSource)
})

test('game screen can accept a frame', () => {
  expect(gameScreen.getFrame().getFrameData().length).toBe(10);
})

test('can turn on and initialize with empty frame', () => {
  gameScreen.turnOn()
  let currentFrame = gameScreen.getFrame().getFrameData()
  expect(currentFrame[0][0]).toStrictEqual(new Pixel(0,0,0,0));
})

test('can refresh with a frame', async () => {
  gameScreen.turnOn()
  let currentFrame = gameScreen.getFrame().getFrameData()
  expect(currentFrame[0][0]).toStrictEqual(new Pixel(0,0,0,0));
  let ball = new Ball(2,2)
  frameSource.addObject(new Ball(2,2))

  setTimeout(() => {
    currentFrame = gameScreen.getFrame().getFrameData()
    expect(currentFrame[0][0]).toStrictEqual(new Pixel(255,255,255,255));
  }, 1000)
  jest.runOnlyPendingTimers();
})