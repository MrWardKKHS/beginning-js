/*
8.	Write a program to calculate the average of a cricket player’s scores.
The program should input scores, add them up and count how many there are.
When a score of 1000 is entered (don’t include this in the scores!),
the program will stop and print out a statement like:

There were ___ scores entered. The total number of runs is ___ giving an average score of ______.
*/

import { questionInt } from "readline-sync";

let total = 0
let count = 0
while (true) {
    let score = questionInt('What was your score\n')
    if (score == 1000){
        break
    }
    total += score
    count += 1
}
const average = total / count
console.log(`There were ${count} scores entered. The total number of runs is ${total} giving an average score of ${average.toFixed(1)}.`)
