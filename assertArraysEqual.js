const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
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

  // Match = return true
  return true;
};


const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
      console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} === ${expected}`);
  }
};

//test code
// assertEqual(assertArraysEqual([5, 4, 3], [5, 4, 3]), true);
// assertEqual(assertArraysEqual([1, 2, 3], [5, 4, 3]), false);
// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false);