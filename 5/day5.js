let number = Math.floor(Math.random() * 10);

 let input = 0;

while (number != input) {
  let input = prompt("Please enter your number");

  if (input == number) {
    alert("Congratulations!");
  } else if (input > number) {
    alert("You guess was too high! Try again.");
  } else if (input < number) {
    alert("Your guess was too low! Try again.");
  }
}
