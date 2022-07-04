class QuadraticEquation {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getA() {
        return this.a;
    }

    getB() {
        return this.b;
    }

    getC() {
        return this.c;
    }

    getDiscriminant() {
        let delta = null;
        delta = (this.b*this.b - 4*this.a*this.c);
        return delta;
    }

    getRoot1(delta) {
        if (delta > 0  ){
            return (-this.b + Math.pow(delta,0.5))/(2*this.a);
        } else return 0;
    }

    getRoot2(delta) {
        if (delta > 0 ){
            return (-this.b - Math.pow(delta,0.5))/(2*this.a);
        } else return 0;
    }
}

let quadraticEquation = new QuadraticEquation(0,4,3);
let delta = quadraticEquation.getDiscriminant();
if (quadraticEquation.a === 0) {
    console.log(`pt da cho co nghiem duy nhat x = ${-quadraticEquation.c/quadraticEquation.b}`);
} else if (delta > 0) {
    console.log(`pt co 2 nghiem pb: x1 = ${quadraticEquation.getRoot1(delta)}, x2 = ${quadraticEquation.getRoot2(delta)}`);
} else if (delta === 0) {
    console.log(`pt co nghiem kep x1=x2= ${quadraticEquation.getRoot2(delta)}`);
} else console.log(`pt da cho vo nghiem`);

