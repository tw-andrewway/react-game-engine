import GameKeeper from "./GameKeeper.ts";
import Ball from "../Ball/Ball.ts";
let subject : GameKeeper;

test("can initialize", () => {
    subject = new GameKeeper();
    expect(subject).toBeDefined();
})

test("Can move ball", () => {
    subject = new GameKeeper();
    let ball = new Ball(1,1);
    subject.addObject(ball);
    ball.move(1,1);
    subject.moveBall(2);
    expect(subject.getBall().getPosition().x).toBe(2);
    expect(subject.getBall().getPosition().y).toBe(2);
})