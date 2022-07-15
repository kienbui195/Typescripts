export class Triangle {

    check(side1: number, side2: number, side3: number): string {
        let str =  '';
        if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
            str = 'Khong phai tam giac';
        }else if (side1 == side2 && side2 == side3) {
            str = 'Tam giac deu';
        } else if (side1 == side2 || side2 == side3 || side3 == side1) {
            str = 'Tam giac can';
        } else if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            str = 'Tam giac thuong';
        } else if (side1 + side2 < side3 || side2 + side3 < side1 || side3 + side1 < side2) {
            str = 'Khong phai tam giac';
        }
        return str;
    }

}