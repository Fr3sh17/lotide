const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
  
};
const tail = function(arr) {
  let newArray = [];
  newArray = arr.slice(1);
  return newArray;
  }
  
const words = ["Yo Yo", "Lighthouse","Labs"];
tail(words);
assertEqual(words.length, 3)

