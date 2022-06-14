const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  var split = str.split("");
  var reversed = split.reverse();
  var joined = reversed.join("");
  return joined

}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  if (num < 0) {
    console.log("The factorial of negative integers are undefined")
    return undefined;
  } else if (num === 0){
    return 1;
  } else {
    return num * factorial(num - 1);
  }

}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const today = new Date();

  const months = ["January", "February", "March", "April", "May", "June"];
  var month = today.getMonth();
  var day = today.getDate();
  var year = today.getFullYear();

  console.log(`Today's date is ${months[month]} ${day}th, ${year}`);
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"

  // Capture length of original string
  const len = str.length;
  
  // Turn string into a list of chars
  let listed = str.split("");
  // ['h', 'e', 'l', 'l', 'o']
  //   0    1    2    3    4

 // The new string will begin after <num> elements
 const new_start = num - 1;
 
 // Using the slice method to capture from new_start to end of string
 let shifted = listed.slice(new_start);

 // Using concatenation to add the remaining characters
 shifted = shifted.concat(listed.slice(0, new_start));

 // Joining back into a string
 return shifted.join("");
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  token = str.split(" ");
  console.log(token);
  return token;
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements

  // Converting to set to quickly filter out duplicates
  const uniqueS = new Set(ary);

  // Converting back to array
  const uniqueA = Array.from(uniqueS);

  console.log(uniqueA);

  // Returning the set converted back to an array
  return uniqueA;
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]

  // Return -1 if lists are not same length
  if (arr1.length != arr2.length) {
    return -1;
  }
  else {
    let zipped = [];
    let i = 0;
    while (i < arr1.length) {
      zipped.push([arr1[i], arr2[i]]);
      i++;
    }
    console.log(zipped);
    return zipped;
  }
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
  if (arr[0].length != 2) {
    return -1;
  }
  else {
    
    let unzip1 = [];
    let unzip2 = [];

    function extract(elt) {
      unzip1.push(elt[0]);
      unzip2.push(elt[1]);
    }

    arr.forEach(extract);

    console.log(unzip1, unzip2);
    return unzip1, unzip2;
  }
}

// Write tests here:
// assert(1 < 2)
// assert(1 + 2 == 3)
// assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")

process.stdout.write("Testing reverse...")
assert(reverse("3df") === "fd3");
console.log("Passed");

process.stdout.write("Testing factorial...");
assert(factorial(4) === 24);
console.log("Passed");

announceDate();

process.stdout.write("Testing shiftRight...");
assert(shiftRight("Hello", 3) === "lloHe");
console.log("Passed")

let input = "JavaScript is Cool";
process.stdout.write(`Testing tokenize with \"${input}\"...`);
tokenize(input);

input = [1, 1, 1, 2, 2, 3, 4, 4];
process.stdout.write(`Testing uniqueOnes with ${input}...`);
uniqueOnes(input);

input = "[1, 2, 3], [5, 3, 1]"
process.stdout.write(`Testing zip with ${input}...`);
zip([1, 2, 3], [5, 3, 1]);

input = "[[1, 5], [2, 3], [3, 1]]"
process.stdout.write(`Testing unzip with ${input}...`);
unzip([[ 1, 5 ], [ 2, 3 ], [ 3, 1 ]]);