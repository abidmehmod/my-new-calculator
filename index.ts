#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter your first number", type: "number", name: "firstnumber" },
  { message: "enter your second number", type: "number", name: "secondnumber" },
  {
    message: "select one operation to perform action",
    type: "list",
    name: "operator",
    choices: ["SUBTRACTION", "ADDITION", "MULTIPLICATION", "DIVISION"],
  },
]);
//condition statement

if(answer.operator === "ADDITION"){
  console.log(answer.firstnumber + answer.secondnumber);
}else if(answer.operator === "SUBTRACTION"){
    console.log(answer.firstnumber - answer.secondnumber);
} else if(answer.operator === "MULTIPLICATION"){
    console.log(answer.firstnumber * answer.secondnumber);
} else if(answer.operator === "DIVISION"){
    console.log(answer.firstnumber / answer.secondnumber);
}  else{"please select correct operator "}
       