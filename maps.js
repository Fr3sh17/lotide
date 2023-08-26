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


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);
