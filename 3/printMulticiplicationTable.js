

function printMultiplicationTable(number) { 
    //table is an empty array because the .push function works by pushing through values in the function
    let table = []
    //we determine the number of values to be entered here by iterating until 10
    for (let i = 1; i <= 10; i++) {
    // we determine that the specific values will be the result of a multiplication
      const result = number * i;
      table.push(number * i)
    }
    //we return the whole array by calling table
    return table
  }

//we finally call the function with the value of number which will run through the loop and provide us with the 10 values of the array
console.log(printMultiplicationTable(8))

