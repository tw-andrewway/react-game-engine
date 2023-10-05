import Position from './Position.ts';
import GameObject from './GameObject.ts';

let subject: GameObject;

beforeEach(() => {
    subject = new GameObject(100,200,1);
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

test('can be moved', () => {
    expect(subject.getPosition()).toStrictEqual(new Position(0,0))
    subject.setInMotion(10);
    expect(subject.getPosition()).toStrictEqual(new Position(0,0))
    subject.exertForce(1,1,1);
    subject.setInMotion(10);
    expect(subject.getPosition()).toStrictEqual(new Position(10,10))
})

test('can have force exerted upon it',() => {
    expect(subject.getSpeedX()).toBe(0);
    expect(subject.getSpeedY()).toBe(0);
    subject.exertForce(1,2,1);
    expect(subject.getSpeedX()).toBe(1);
    expect(subject.getSpeedY()).toBe(2);
})

test('has dimensions', () => {
    expect(subject.getWidth()).toBe(100);
    expect(subject.getHeight()).toBe(200);
})

test('has a frame',() => {
    expect(subject.getFrame()).toBeDefined();
})

test('can collide along x', () => {
    let otherObject = new GameObject(100,100,1);
    otherObject.setPosition(new Position(0,0));
    subject.setPosition(new Position(100,0));
    otherObject.setVelocity(1,0);
    subject.setVelocity(-1,0);

    otherObject.collide(subject);

    expect(otherObject.getSpeedX()).toBe(-1);
    expect(subject.getSpeedX()).toBe(1)
    expect(otherObject.getSpeedY()).toBe(0);
    expect(subject.getSpeedY()).toBe(0);
})