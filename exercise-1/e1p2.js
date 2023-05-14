/*
2.	Write a program that will ask the users name, save it in a variable and will then printout 
Hello ____ 
*/
import { question } from 'readline-sync'
let name = question('What is your name\n')
console.log(`Hello ${name}.`)
