// let sum = (x,y,z) => x+y+z;
// const numbers = [1,2,3];
// console.log(sum(...numbers));

// let a = [1,2];
// let b = [1,2,3]
// a.push(...b);
// console.log(a);

// let a = [1,2];
// let b = [...a]
// console.log(b);

// let obj1 = {a:1,b:2}
// let obj2 = {...obj1}
// console.log(obj2)

let a = [1,2];
let b = [1,2,3]
let c = [...a,...b]
console.log(c);