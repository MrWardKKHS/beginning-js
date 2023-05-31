/*
1.	Write a program that asks for the person's name, stores it in a variable called name 
and then prints a simple message using the variable and concatenation.

Then do the same using a template string
*/

import { question } from "readline-sync";

let name = question("what is your name?")

// concatenation
console.log("Hello, " + name)

// template string
console.log(`Hello, ${name}`)
