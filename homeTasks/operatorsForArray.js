//TODO: Write a function that calculates sum, difference, multiplication and division between given array
//TODO:  elements depending on passed operation symbol. Write appropriate function for each operation.

function operations(arr, symb) {
  switch (symb) {
    case '+':
      return plusElements(arr);
      break;
    case '-':
      return minusElements(arr);
      break;
    case '*':
      return multipleElements(arr);
      break;
    case '/':
      return devideElements(arr);
      break;
  }
}

function plusElements(plusArray) {
  let sum = 0;
  for (let el of plusArray) {
    sum += el;
  }
  return sum;
}

function minusElements(minusArr) {
  let result = minusArr[0];
  for (let i = 1; i < minusArr.length; i++) {
    result -= minusArr[i];
  }
  return result;
}

function multipleElements(multiArray) {
  let result = 1;
  for (let el of multiArray) {
    result *= el;
  }
  return result;
}

function devideElements(devisionArray) {
  let devResult = devisionArray[0];
  for (let i = 1; i < devisionArray.length; i++) {
    devResult /= devisionArray[i];
  }
  return devResult;
}


//? Testing for [12,2,3] array all operations
console.log(`In case of / the output will be: ${operations([12, 2, 3], '/')}`);
console.log(`In case of + the output will be: ${operations([12, 2, 3], '+')}`);
console.log(`In case of - the output will be: ${operations([12, 2, 3], '-')}`);
console.log(`In case of * the output will be: ${operations([12, 2, 3], '*')}`);
