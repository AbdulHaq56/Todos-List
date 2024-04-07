#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosQns = await inquirer.prompt([
        {
            name: "firstQns",
            message: "what would you like to add in your Todos list?",
            type: "input",
        },
        {
            name: "secondQns",
            message: "would you like to add more in your Todos list?",
            type: "confirm",
            default: "true",
        },
    ]);
    todos.push(todosQns.firstQns);
    console.log(todos);
    condition = (todosQns.secondQns);
}
