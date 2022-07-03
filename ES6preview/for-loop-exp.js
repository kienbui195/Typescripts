let obj = {
    name: 'Peter',
    age: 16,
    salary: 3000
}

function geeks(){
    console.log("for(;;)");
    for (let i = 0; i <= 10; i+=2) {
        console.log(i + '');
    }
    console.log('for...of');
    for (const item of ['Ha noi',2000]) {
        console.log(item + '');
    }
    console.log('for...in');
    for (const item in obj) {
        console.log(obj[item] + '');
    }
}
geeks();