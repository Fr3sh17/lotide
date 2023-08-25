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

  // Match = return true
  return true;
};

const letterPositions = function(sentence) {
  const position = {};
  // logic to update results here 
  for (i = 0; i < sentence.length; i++) {
    let letter = sentence[i] 
    if (position[letter]) {
      position[letter].push(i)
    } 
    else { 
      position[letter] = [i]
    }
  }
  return position;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("morning").r, [1])
