
const process = require("process");

function getEvenNumbers() { 
    let arr = []
    const number = process.argv[2]
    for (let i = 1; i <= number; i++) {
        if(i % 2 === 0){
            arr.push(i)
        }
      }
    return(arr)
}

console.log(getEvenNumbers())
