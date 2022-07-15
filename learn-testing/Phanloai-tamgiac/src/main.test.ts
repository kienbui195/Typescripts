import {Triangle} from "./Triangle"

describe('Phan loai tam giac', () => {
    test('Phan loai tam giac', () => {
        let triangle = new Triangle();

        expect(triangle.check(2,2,2)).toMatch('Tam giac deu');
    });
    test('Phan loai tam giac', () => {
        let triangle = new Triangle();

        expect(triangle.check(2,2,3)).toMatch('Tam giac can');
    });
    test('Phan loai tam giac', () => {
        let triangle = new Triangle();

        expect(triangle.check(3,4,5)).toMatch('Tam giac thuong');
    });
    test('Phan loai tam giac', () => {
        let triangle = new Triangle();

        expect(triangle.check(8,2,3)).toMatch('Khong phai tam giac');
    });
    test('Phan loai tam giac', () => {
        let triangle = new Triangle();

        expect(triangle.check(-1,2,1)).toMatch('Khong phai tam giac');
    });
    test('Phan loai tam giac', () => {
        let triangle = new Triangle();

        expect(triangle.check(0,1,1)).toMatch('Khong phai tam giac');
    });
})