const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
  
};

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
      if (callback(object[key])) {
      return key;
  } else {

  }
}
return undefined;
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"