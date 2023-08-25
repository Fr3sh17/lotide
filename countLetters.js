const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
  
};


const countLetters = function(words) {
  const result = {}
  for (const letter of words) {
    if (result[letter]) {
      result[letter] += 1
    } 
    else {
      result[letter] = 1
    }
  }
  return result
}
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);