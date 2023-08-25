const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
  
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
      console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} === ${expected}`);
  }
};
const eqArrays = function(array1, array2) {
  // Verify if the arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }

  // Compare each elements of the arrays
  for (let y = 0; y < array1.length; y++) {
    if (array1[y] !== array2[y]) {
      return false; // No match = return false
    }
  }
}
const without = function(source, itemsToRemove) {
  newArray = []
  for (i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i])
    }
  } 
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS