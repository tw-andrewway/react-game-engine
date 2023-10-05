import FrameSource from './FrameSource';
import GameObject from '../GameObject/GameObject';
import Ball from '../GameObject/Ball';
import Frame from '../Frame/Frame';
let subject: FrameSource

beforeEach(() => {
    subject = new FrameSource(5,5);
})

test("has a default background",() => {
    let frame: Frame = subject.getNextFrame();
    let isBlackBackground = frame.getFrameData().every((row) => {
        return row.every((pixel) => {
            return pixel.getRed() === 69 
                && pixel.getGreen() === 69 
                && pixel.getBlue() === 69 
                && pixel.getStandard() === 255;
        })
    });

    expect(isBlackBackground).toBeTruthy();
})

test('can add objects', () => {
    subject.addObject(new GameObject(1,1,1));
    expect(subject.getObjects().length).toBe(1);
});

test("can be drawn over with object", () => {
    expect(subject.currentFrame.getFrameData()[0][0].getRed()).toBe(69);
    subject.addObject(new Ball(2,2,1));
    subject.drawObjects(1);
    expect(subject.currentFrame.getFrameData()[0][0].getRed()).toBe(255);
})

test("can be drawn over with object at position", () => { 
    expect(subject.currentFrame.getFrameData()[3][3].getRed()).toBe(69);
    const ball = new Ball(3,3,1);
    ball.setPosition({x: 1, y: 1});
    subject.addObject(ball);
    subject.drawObjects(1);
    expect(subject.currentFrame.getFrameData()[3][3].getRed()).toBe(255);
});