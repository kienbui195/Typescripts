replace = (array, from, to, elements) => array.splice.apply(array, [from, to - from].concat(elements))


let testArray1 = [1, 2, 100, 100, 6]
let testArray = [...testArray1]
let [...array] = [3,4,5]

replace(testArray, 2, 4, array)
console.log(testArray)

copyReplace = (array, from, to, elements) => array.slice(0, from).concat(elements).concat(array.slice(to))

console.log(copyReplace(testArray, 2, 4, array))

let customerOrder = []

function recordOrders (time) {
    customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
}

recordOrders(new Date, "coffee", "yaourt", "pizza")
console.log(customerOrder)