//TODO: Write a function, which receives two numbers as arguments and finds all numbers between them
//TODO:  such that each digit of the number is even. The numbers obtained should be printed in a comma-
//TODO:   separated sequence on a single line.

function printEvenDigits(numOne, numTwo) {
  let resultArray = [];
  for (let i = numOne + 1; i <= numTwo; i++) {
    let even = true;
    const arrayFromI = i.toString().split('');
    for (let digit of arrayFromI) {
      if (digit % 2 > 0) {
        even = false;
      }
    }
    if (even) {
      resultArray.push(i);
    }
  }
  return resultArray.length
    ? resultArray.join(',')
    : '“Such numbers does not exist.”';
}

//? Testing the function with pairs (19,42) and (99, 199)
console.log(
  `In case of 19, 42  the output will be: ${printEvenDigits(19, 42)}`
);
console.log(
  `In case of 99, 199  the output will be: ${printEvenDigits(99, 199)}`
);
