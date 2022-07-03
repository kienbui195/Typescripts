// let names = ['alpha','beta','gamma','delta'];
// let [firstname, secondname] = names;

//let [firstname, secondname] = ['alpha','beta','gamma','delta'];
//let [firstname,,thirdname] = ['alpha','beta','gamma','delta'];

// let [firstname,,...lastname] = ['alpha','beta','gamma','delta'];
// [firstname,,...lastname] = [...lastname,firstname];
//
//
// console.log(firstname);
// //console.log(secondname);
// console.log(lastname);

// function  NameLists() {
//     return  ['alpha','beta','gamma','delta'];
// }
//
// let [firstname, secondname] = NameLists();
// console.log(firstname);
// console.log(secondname);

// let marks = {x:21,y:-34,z:47};
// let {x,y,z} = marks;
//
// console.log(x);
// console.log(y);
// console.log(z);

let marks = {
    section1: {alpha:15,beta:16},
    section2: {alpha:5,beta:4}
}
let {section1: {alpha: alpha1, beta: beta1}} = marks;
console.log(alpha1,beta1);