const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Arrays Equal: ${array1} === ${array2}✅`);
  } else {
    console.log(`❌Arrays NOT Equal: ${array1} === ${array2}❌`);
  }
};


const middle = function(array) {
  // if less than two elements in array return to empty
  if (array.length <= 2 ){
    return [];
  }
  // get the middle of the array
  let middleNumber = Math.floor (array.length /2)
  // if odd number array return one item
  const isEven = array.length %2;
  if (isEven == 1){
    return [array[middleNumber]]
  }
  // if even number of array return two items
  if (isEven == 0){ 
    return [array[middleNumber -1], array[middleNumber]]
  } 
};
console.log(middle([1])) // => [])
console.log(middle([1, 2])) // => [])
console.log(middle([1, 2, 3])) // => [2])
console.log(middle([1, 2, 3, 4, 5])) // => [3])
console.log(middle([1, 2, 3, 4])) // => [2, 3])
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4])