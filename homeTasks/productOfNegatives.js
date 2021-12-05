//TODO: Write a function, which receives an array as an argument which elements arrays of numbers. Find
//TODO:  product of biggest negative number of each array. If there is not any negative number, ignore that
//TODO:   array. Check that items of the given array are arrays.

function productNegatives(arr) {
  if (!arr.every(checkType)) {
    return 'Invalid Argument';
  }
  let elNegatives = [];
  for (let el of arr) {
    let lastNegativeEl = null;
    for (let i = 0; i < el.length; i++) {
      if (el[i] < 0 && !lastNegativeEl) {
        lastNegativeEl = el[i];
      } else if (el[i] < 0 && lastNegativeEl && el[i] > lastNegativeEl) {
        lastNegativeEl = el[i];
      }
    }
    if (lastNegativeEl) {
      elNegatives.push(lastNegativeEl);
    }
  }

  if (elNegatives.length > 0) {
    let product = elNegatives[0];
    for (let j = 1; j < elNegatives.length; j++) {
      product *= elNegatives[j];
      return product;
    }
  } else {
    return 'No negatives';
  }
}

function checkType(prop) {
  return Array.isArray(prop);
}

//? Testing for some arrays
console.log(
  `In case of [[2, -9, -3, 0],[1, 2],[-4, -11, 0],] the output will be: ${productNegatives(
    [
      [2, -9, -3, 0],
      [1, 2],
      [-4, -11, 0],
    ]
  )}`
);
console.log(
  `In case of [[3, 4], [11, 0], [5, 6, 7, 8]] the output will be: ${productNegatives(
    [
      [3, 4],
      [11, 0],
      [5, 6, 7, 8],
    ]
  )}`
);
console.log(
  `In case of [1, 2, 3] the output will be: ${productNegatives([1, 2, 3])}`
);
