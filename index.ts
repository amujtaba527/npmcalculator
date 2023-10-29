#! /usr/bin/env node
import inquirer from "inquirer";

class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }
}

async function runCalculator() {
  const calculator = new Calculator();

  const questions = [
    {
      type: "number",
      name: "operand1",
      message: "Enter first operand:",
    },
    {
      type: "number",
      name: "operand2",
      message: "Enter second operand:",
    },
    {
      type: "list",
      name: "operation",
      message: "Select operation:",
      choices: ["add", "subtract", "multiply", "divide"],
    },
  ];

  const answers = await inquirer.prompt(questions);

  const operand1 = parseFloat(answers.operand1);
  const operand2 = parseFloat(answers.operand2);

  switch (answers.operation) {
    case "add":
      console.log(calculator.add(operand1, operand2));
      break;
    case "subtract":
      console.log(calculator.subtract(operand1, operand2));
      break;
    case "multiply":
      console.log(calculator.multiply(operand1, operand2));
      break;
    case "divide":
      console.log(calculator.divide(operand1, operand2));
      break;
    default:
      console.log("Invalid operation.");
      break;
  }
}

runCalculator();
