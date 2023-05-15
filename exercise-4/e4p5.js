/*
5.	Write a program which will let the user input 12 numbers, add them up and print out the total.
*/
import {questionInt} from "readline-sync"

let total = 0
for (let i=0; i<5; i++){
    total += questionInt(`input number ${i+1}`)
}
