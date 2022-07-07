import {Point2D} from "./point2D";
import {Point3D} from "./point3D";

let point2d: Point2D = new Point2D(10,20);
let point3d: Point3D = new Point3D(20,25, 15);

console.log(point2d.getXY());
point2d.setXY(5,10);
console.log(point2d.getXY());
console.log(point3d.getXYZ());
point3d.setXYZ(5,10,15);
console.log(point3d.getXYZ());

