
const process = require("process");

function getEvenNumbers() { 
    let arr = []
    const number = process.argv[2]
    for (let i = 1; i <= number; i++) {
        // modulo (%) divides a given number and whatever remains of the division will be the outcome
        // due to the === only whatever divides by two with no remainder will be pushed into the array
        if(i % 2 === 0){
            arr.push(i)
        }
      }
    return(arr)
}

console.log(getEvenNumbers())
