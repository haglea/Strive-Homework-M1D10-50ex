/*      JS EXERCISES    */

//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
console.log("--EX21--");
let x = "John";
let y = "Doe";
console.log('"' + x, "<>", y + '"');

//22) Create an object with properties such name, surname, email
console.log("--EX22--");
let person = {
  name: "John",
  surname: "Doe",
  email: "john@doe.com",
};
console.log(person);

//23) Delete Email from the previously created object
console.log("--EX23--");
delete person.email;
console.log(person);

// 24) Create an array with 10 strings in it
console.log("--EX24--");
const array10Strings = [
  "string1",
  "string2",
  "string3",
  "string4",
  "string5",
  "string6",
  "string7",
  "string8",
  "string9",
  "string10",
];
console.log(array10Strings);

//25) Print in the console every string in the previous array
console.log("--EX25--");
for (i = 0; i < array10Strings.length; i++) {
  console.log(array10Strings);
}

// 26) Create an array with 100 random numbers in it
console.log("--EX26--");
let array100Random = [];
for (i = 0; i < 100; i++) {
  array100Random[i] = Math.floor(Math.random() * 100 + 1); //set it to random whole integers from 1 to 100
  array100Random.push(array100Random[i]);
}
console.log(array100Random);

//27) Wrote a function to get the MAX and the MIN from the previously created array
console.log("--EX27--");
let getMaxAndMin = function (array) {
  let maxRandomNumber = Math.max(...array);
  let minRandomNumber = Math.min(...array);
  console.log(maxRandomNumber, minRandomNumber);
  return maxRandomNumber, minRandomNumber;
};
getMaxAndMin(array100Random);

//28) Create an array of arrays, in which every array has 10 random numbers
console.log("--EX28--");

const createArrayofArrays = function (numberOfArrays) {
  let arrayA = [];
  let arrayAI = [];

  for (i = 0; i < numberOfArrays; i++) {
    for (j = 0; j < 10; j++) {
      arrayAI[j] = Math.floor(Math.random() * 100) + 1; //random number 1-100
    }
    arrayA.push(arrayAI);
  }
  console.log(arrayA);
};
createArrayofArrays(2);

//29) Create a function that gets 2 arrays and returns the longest one
console.log("--EX29--");

let getLongestArray2 = function (array1, array2) {
  if (array1.length > array2.length) {
    console.log(array1, "is longest");
    return array1;
  } else {
    console.log(array2, "is longest");
    return array2;
  }
};
getLongestArray2([1, 2], [2, 3, 4]);

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
console.log("--EX30--");

let getHigherSumArray2 = function (arrayOfNumbers1, arrayOfNumbers2) {
  let sumArray1;
  let sumArray2;
  for (i = 0; i < arrayOfNumbers1.length; i++) {
    sumArray1 += arrayOfNumbers1[i];
    sumArray2 += arrayOfNumbers2[i];
  }
  if (sumArray1 > sumArray2) {
    console.log("Sum of values in array:", arrayOfNumbers1, "is higher");
    return arrayOfNumbers1;
  } else {
    console.log("Sum of values in array:", arrayOfNumbers2, "is higher");
    return arrayOfNumbers2;
  }
};
getHigherSumArray2([1, 2], [2, 3, 4]);
