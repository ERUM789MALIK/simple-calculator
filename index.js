#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the opretorsb to perform opreation",
        type: "list",
        name: "opretor",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//condition statement
if (answer.opretor === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opretor === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opretor === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opretor === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
