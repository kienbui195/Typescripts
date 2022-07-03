const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]

totalMachineValue = arr => {
    let sum = 0;
    arr.forEach((value,index) => sum += value.value);
    return sum;
}
console.log(totalMachineValue(inventory));