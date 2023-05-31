/*
4.	Write a program that will ask the user to input their name.
The response should be “Hello Name” with the first letter of the name in upper case and the rest in lower case.
(You will need to think about how you determine which letters are to be lower case.)
*/

import { question } from "readline-sync";

let name = question("what is your name?")
let caseCorrectedName = name[0].toUpperCase() + name.slice(1).toLowerCase()

console.log(`Hello, ${caseCorrectedName}`)
