//TODO: Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

function separateOdd(arr) {
  const oddArray = [];
  const evenArray = [];
  for (let el of arr) {
    if (el % 2 > 0) {
      oddArray.push(el);
    } else {
      evenArray.push(el);
    }
  }
  return `odd: ${oddArray} , even: ${evenArray}`;
}

//? Testing function for some arrays
console.log(
  `In case of [45, 12, 3, 6, 17, 0]  the output will be: ${separateOdd([
    45, 12, 3, 6, 17, 0,
  ])}`
);
console.log(
  `In case of [1, 3, 5, 9]  the output will be: ${separateOdd([1, 3, 5, 9])}`
);
