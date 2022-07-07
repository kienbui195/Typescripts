export class Circle {
    private color: string;
    private radius: number;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea(): number {
        return Math.pow(this.radius,2)*Math.PI;
    }
    getPerimeter(): number {
        return 2*this.radius*Math.PI;
    }
}