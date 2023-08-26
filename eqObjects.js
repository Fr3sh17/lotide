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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true 
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false 
assertEqual(eqObjects(ab, abc), false);