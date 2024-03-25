import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number:", type: "number", name: "firstNumber" },
  { message: "Enter Second Number:", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operations.",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Division", "Multiplication"],
  },
]);

// conditional statement
if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operator");
}
