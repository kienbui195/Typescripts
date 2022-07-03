// const car1 = ['audi','bwm','tata','mercedes'];
// const car2 = [...car1];
// const car3 = [...car1,'toyota','nissan'];

// const car1 = ['audi','bwm','tata','mercedes'];
// const car2 = ['toyota','nissan'];
// const car3 = [...car1,...car2];

// const car1 = {
//     brand: 'bmw',
//     color: 'red'
// }
//
// const car2 = {
//     brand: 'toyota',
//     color: 'black',
//     years: 1994
// }
//
// const car3 = {...car1,...car2};
// console.log(car3)

// const car = 'audi';
// const a = [...car];
// console.log(a);

const nums = [3,5,7,8,9];
const [a,b,c,...others] = nums;
console.log(a);
console.log(b);
console.log(c);
console.log(others);


