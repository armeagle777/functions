//TODO: Write a function which receives an array and a number as arguments and returns a new array from
//TODO:  the elements of the given array which are larger than the given number.

function createArray(arr, num) {
  const filteredArray = arr.filter(el => el > num);
  return filteredArray.length ? filteredArray : '“Such values do not exist.”';
}

//? Testing some pairs of array and number
console.log(
  `In case of [10, 25, 16, -5, 30, 15, 24] , 16 the output will be: ${createArray(
    [10, 25, 16, -5, 30, 15, 24],
    16
  )}`
);
console.log(
  `In case of [1, 1, 2, -3, 0, 8, 4, 0], 9 the output will be: ${createArray(
    [1, 1, 2, -3, 0, 8, 4, 0],
    9
  )}`
);
