/*
2	Bar codes usually consist of 13 digits eg 9425674564783.
The first two digits give the country of origin, the next 5 the manufacturer,
the next 5 give the product code. The last digit is used as a check digit. 
•	Write a program which will input a bar code
•	check that it is 13 digits long
•	then list the country code, the manufacturer’s code, the product code and the check digit 
(you can Google some of these, or make them up)
•	If the barcode does not have 13 digits, there should be an error message.
*/

import { questionInt } from "readline-sync";
let code = questionInt("please input the barcode\n")
let str_code = code.toString()
while (str_code.length !== 13) {
    console.log("please make sure your barcode is 13 digits long")
    code = questionInt("please input the barcode\n")
    str_code = code.toString()
}
let country = str_code.slice(0, 2)
let manufacturer = str_code.slice(2, 7)
let product = str_code.slice(7)
console.log(`Country: ${country}`)
console.log(`manufacturer: ${manufacturer}`)
console.log(`product: ${product}`)


