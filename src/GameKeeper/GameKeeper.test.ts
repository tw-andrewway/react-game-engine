import GameKeeper from "./GameKeeper.ts";

let subject : GameKeeper;

test("can initialize", () => {
    subject = new GameKeeper();
    expect(subject).toBeDefined();
})

