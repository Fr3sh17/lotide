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

// Test cases
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // Should return true
console.log(eqArrays([1, 2, 3], [1, 2, 4])); // Should return false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // Should return false
console.log(eqArrays([], [])); // Should return true
console.log(eqArrays(['a', 'b'], ['a', 'b'])); // Should return true
console.log(eqArrays(['a', 'b'], ['b', 'a'])); // Should return false
