/*
JS EXERCISES

        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values


*/


console.log("--EX21--")
let x = "John"
let y = "Doe"
console.log('"' + x, '<>', y + '"')

console.log("--EX22--")
let person = {
    name: "John",
    surname: "Doe",
    email: "john@doe.com"
}
console.log(person)

console.log("--EX23--")
delete person.email
console.log(person)

console.log("--EX24--")
const array10Strings = ["string1", "string2","string3","string4","string5","string6","string7","string8","string9","string10"]
console.log(array10Strings)

console.log("--EX25--")
for (i=0;i<array10Strings.length;i++) {
console.log(array10Strings[i])
}

console.log("--EX26--")
let array100Random = []
for (i=0;i<100;i++) {
   array100Random[i] = Math.floor(Math.random() * 100 + 1) //set it to random whole integers from 1 to 100
}
console.log(array100Random)

console.log("--EX27--")
let getMaxAndMin = function (array100Random) {
    let maxRandomNumber = Math.max.apply(null, array100Random)
    let minRandomNumber = Math.min.apply(null, array100Random)
    console.log(maxRandomNumber, minRandomNumber)
    return maxRandomNumber, minRandomNumber
}
getMaxAndMin(array100Random)

console.log("--EX28--")

console.log("--EX29--")
const array1 = [1,2]
const array2 = [2,3,4]
let getLongestArray2 = function () {
    if (array1.length > array2.length) { 
        console.log(array1, "is longest")
        return array1
    } else { 
        console.log(array2, "is longest")
        return array2
    }
}
getLongestArray2()

console.log("--EX30--")

const arrayOfNumbers1 = [1,2]
const arrayOfNumbers2 = [2,3,4]
let sumArray1
let sumArray2
let getHigherSumArray2 = function () {
    for (i=0;i<arrayOfNumbers1.length;i++) {
        sumArray1 += arrayOfNumbers1[i]
        sumArray2 += arrayOfNumbers2[i]
    }
    if (sumArray1 > sumArray2) { 
        console.log("Sum of values in array:", arrayOfNumbers1, "is higher")
        return arrayOfNumbers1
    } else { 
        console.log("Sum of values in array:", arrayOfNumbers2, "is higher")
        return arrayOfNumbers2
    }
}
getHigherSumArray2()