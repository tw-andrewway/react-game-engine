
// Facilitates collision of objects
class CollisionHandler {
    constructor(private width: number, private height: number) {

    }

    public isOutOfBounds(x: number, y: number): boolean {
        return x < 0 || x >= this.width || y < 0 || y >= this.height;
    }
}

export default CollisionHandler;