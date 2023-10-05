import CollisionHandler from "./CollisionHandler";

test('can initialize', () => {
    let collisionHandler = new CollisionHandler(100, 100);
    expect(collisionHandler).toBeDefined();
})

test('can detect out of bounds', () => {
    let collisionHandler = new CollisionHandler(100, 100);
    expect(collisionHandler.isOutOfBounds(101, 101)).toBe(true);
})

test('can detect in bounds', () => {
    let collisionHandler = new CollisionHandler(100, 100);
    expect(collisionHandler.isOutOfBounds(50, 50)).toBe(false);
})

test('can detect out of bounds on x', () => {
    let collisionHandler = new CollisionHandler(100, 100);
    expect(collisionHandler.isOutOfBounds(101, 50)).toBe(true);
})

test('can detect out of bounds on y', () => {
    let collisionHandler = new CollisionHandler(100, 100);
    expect(collisionHandler.isOutOfBounds(50, 101)).toBe(true);
})