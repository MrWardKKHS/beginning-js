/*
5.	Write a program which will input a word, followed by 10 more words.
The program should count how many of these ten words is the same as the 
first word entered and print a message like:
	The word... was input... times
*/

import { question } from "readline-sync";

let firstWord = question("What is your first word")
let count = 0
for (let i=0; i<10; i++){
    let other = question(`Please input word ${i + 1}.`)
    if (other === firstWord) {
        count++
    }
}
console.log(`The word ${firstWord} was input ${count} times`)

