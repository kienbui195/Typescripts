
export class Point2D {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
    setX(x: number) {
        this.x = x;
    }
    setY(y: number) {
        this.y = y;
    }
    getXY(): object {
        return {
            x: this.x,
            y: this.y
        }
    }
    setXY(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
}