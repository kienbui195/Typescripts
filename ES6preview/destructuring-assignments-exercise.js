let profile = {
    fname: 'Code',
    lname: 'Gym',
    bday: new Date('1979-01-02')
}

let {fname: name1, lname: name2} = profile;
console.log(name1, name2);