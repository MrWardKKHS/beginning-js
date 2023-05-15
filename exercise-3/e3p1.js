/*
1.  A video shop rents weekly videos for $2 each. 
However, if a customer rents 10 videos, they are charged $10 for the first 10 and $2 for each one above that.
Determine inputs, processing and outputs needed, and write the code.
*/

import { question } from 'readline-sync'

const videos = parseInt(question("How many videos are you getting?"))
let total

if (videos <= 10){
    total = 2 * videos
} else {
    total = 10 + 2 * (videos - 10)
}

console.log(`Your total comes to $${total}`)
