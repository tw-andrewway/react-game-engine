import FrameSource from './FrameSource';
import GameObject from '../GameObject/GameObject';
import Ball from '../GameObject/Ball';
import Frame from '../Frame/Frame';
let subject: FrameSource

beforeEach(() => {
    subject = new FrameSource(5,5);
})

test("has a black background",() => {
    let frame: Frame = subject.getNextFrame();
    let isBlackBackground = frame.getFrameData().every((row) => {
        return row.every((pixel) => {
            return pixel.getRed() === 0 
                && pixel.getGreen() === 0 
                && pixel.getBlue() === 0 
                && pixel.getStandard() === 0;
        })
    });

    expect(isBlackBackground).toBeTruthy();
})

test('can add objects', () => {
    subject.addObject(new GameObject(1,1));
    expect(subject.getObjects().length).toBe(1);
});

test("can be drawn over with object", () => {
    expect(subject.currentFrame.getFrameData()[0][0].getRed()).toBe(0);
    subject.addObject(new Ball(2,2));
    subject.drawObjects();
    expect(subject.currentFrame.getFrameData()[0][0].getRed()).toBe(255);
})

test("can be drawn over with object at position", () => { 
    expect(subject.currentFrame.getFrameData()[3][3].getRed()).toBe(0);
    const ball = new Ball(3,3);
    ball.setPosition({x: 1, y: 1});
    subject.addObject(ball);
    subject.drawObjects();
    expect(subject.currentFrame.getFrameData()[3][3].getRed()).toBe(255);
});