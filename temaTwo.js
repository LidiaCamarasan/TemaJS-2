console.log("Exercitiul 1:");

var evenCounter = 10;

for (evenCounter = 0; evenCounter <= 10; evenCounter += 2) {
  console.log(evenCounter);
}
console.log("\n\n");

console.log("Exercitiul 2:");

var numbers = [1, -5, 20, -34, 16, 29, 36, -4];

var numberSum = 0;

numbers.forEach((element) => {
  numberSum += element;
});
console.log(numberSum);
console.log("\n\n");

console.log("Exercitiul 3:");

/* var listOfNum = [1, 3, 5, 7, 9, 11];
console.log("Original array:");
console.log(listOfNum);

const reversedArray = listOfNum.reverse();
console.log("Reversed array:");

console.log(reversedArray); */

var listOfNum = [1, 3, 5, 7, 9, 11];
console.log("Original array:");
console.log(listOfNum);
const reversedArray = [...listOfNum].reverse();
console.log("Reversed array:");

console.log(reversedArray);
console.log("\n\n");
//----------------------------------------------

var listaNumere = [5, 7, 15, 21, 27];
console.log("Original array:");
console.log(listaNumere);
console.log("Reversed array:");

const newArray = [];

for (let i = listaNumere.length - 1; i >= 0; i--) {
  newArray.push(listaNumere[i]);
}
console.log(newArray);
console.log("\n\n");
//-----------------------------------------------

var listOfNumbers = [18, 19, 20, 21, 22, 23, 24, 25];
console.log("Original array:");
console.log(listOfNumbers);
const newArrayOfNum = [];

listOfNumbers.forEach((value) => {
  newArrayOfNum.unshift(value);
});
console.log("Reversed array:");

console.log(newArrayOfNum);
console.log("\n\n");

console.log("Exercitiul 4:");

function getVowels(string) {
  var vowelsCount = 0;
  var vowels = "aeiou";

  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log("The number of vowels is: " + getVowels("string de test"));

//--------------------------------------------------

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getCount("string de test doi"));
