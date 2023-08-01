const process = require("process");

function printMultiplicationTable() { 
    const number = process.argv[2]
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      console.log(`${number} x ${i} = ${result}`)
    }
  }


printMultiplicationTable()