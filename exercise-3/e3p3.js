/*
3.	Write a program that will ask the user to input a number. 
The output should tell the user whether the number is larger or smaller than zero, or equal to zero.
*/

import { question } from "readline-sync";

const num = parseInt(question("pick a number"))

if (num < 0){
    console.log('your number is less than 0')
} else if (num > 0) {
    console.log('your number is greater than 0')
} else {
    console.log('your number is 0')
}

