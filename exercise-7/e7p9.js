/*
3.	Write a program which will take in a user’s name – first name and surname – 
and will produce a username for them which is the first 5 letters of their surname,
followed by their first initial. The username is to be all lower case.
(Hint –find the space, which will then tell you where the surname begins.)
*/

import { question } from "readline-sync";
let name = question("Please enter your full name\n")
const [ first, last ] = name.split(" ") // Unpacking! (destructuring)
const username = last.slice(0, 5).toLowerCase() + first[0].toLowerCase()
console.log(username)

