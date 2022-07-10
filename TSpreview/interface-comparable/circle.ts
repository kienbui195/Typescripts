export class Circle {
    private radius: number;

    constructor(radius:number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    toString(): string {
        return `A circle with radius ${this.getRadius()}`;
    }
}