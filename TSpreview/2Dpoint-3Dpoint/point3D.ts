import {Point2D} from "./point2D";

export class Point3D extends Point2D {
    private z: number;

    constructor(x: number, y: number,z:number) {
        super(x,y);
        this.z = z;
    }

    getZ(): number {
        return this.z;
    }
    setZ(z: number) {
        this.z = z;
    }
    getXYZ(): object {
        return {
            x: this.getX(),
            y: this.getY(),
            z: this.z
        }
    }
    setXYZ(x:number,y:number,z:number) {
        this.setX(x);
        this.setY(y);
        this.setZ(z);
    }
}