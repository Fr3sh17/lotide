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

const eqObjects = function(object1, object2) { 
  let objectKeys = Object.keys(object1) 
  let objectKeys2 = Object.keys(object2) 

  if (Object.keys(object1).length === Object.keys(object2).length) {  
    for (let key of objectKeys) { 
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])) {
          return false
        }
      } 
      else if (object1[key] !== object2[key]) { 
        return false
      }
    } 
  } 
  else { 
    return false
  }  
  return true
  
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!  
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) { 
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } 
  else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)

  }
};

// TEST CODE


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true 
assertObjectsEqual(ab, ba);


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false 
assertEqual(eqObjects(ab, abc), false); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false