import BlinkFrameSource from './BlinkFrameSource';
import Frame from '../Frame/Frame';
import Pixel from '../Pixel';

jest.mock('../Frame/Frame');
jest.mock('../Pixel');

let subject;

beforeEach(() => {
    subject = new BlinkFrameSource();
    Frame.mockImplementation(() => {    
        return {
            getWidth: jest.fn().mockReturnValue(1),
            getHeight: jest.fn().mockReturnValue(1),
            setPixel: jest.fn()
        }
    })
})

test('can create BlinkFrameSource',() => {
    expect(subject).toBeDefined();
})

test('BlinkFrameSource returns a frame', () => {
    let frame = subject.getNextFrame();
    expect(frame).toBeDefined();
})



