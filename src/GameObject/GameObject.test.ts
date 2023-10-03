import Position from './Position.ts';
import GameObject from './GameObject.ts';

let subject: GameObject;

beforeEach(() => {
    subject = new GameObject(100,200);
})

test('can initialize', () => {
    expect(subject).toBeDefined();
})

test('can have position', () => {
    expect(subject.getPosition()).toBeDefined();
})

test('can change position', () => {
    expect(subject.getPosition()).toStrictEqual(new Position(0,0))
    let position = new Position(1,1);
    subject.setPosition(position);
    expect(subject.getPosition()).toBe(position);
})

test('has dimensions', () => {
    expect(subject.getWidth()).toBe(100);
    expect(subject.getHeight()).toBe(200);
})

test('has a frame',() => {
    expect(subject.getFrame()).toBeDefined();
})