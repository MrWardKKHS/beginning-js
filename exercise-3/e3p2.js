 /*
2.	Write a program that will input someone’s age and print out either 
“You are not old enough to vote” or 
“You are old enough to vote” depending on whether they are 18 or not.
 */
import { question } from 'readline-sync'

const age = parseInt(question("How old are you?\n"))

if (age >= 18) {
    console.log("You are old enough to vote")
} else {
    console.log("You are not old enough to vote")
}

