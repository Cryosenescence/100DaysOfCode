let number = Math.floor(Math.random() * 100);

let input = prompt("Please enter your number");


if (input == number) {
  alert("Congratulations!");
} else if (input > number) {
  alert("You guess was too high! Try again.");
} else if (input < number) {
  alert("Your guess was too low! Try again.");
}
