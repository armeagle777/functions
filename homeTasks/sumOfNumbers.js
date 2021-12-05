//TODO: Write a function, which receives a string, finds possible largest numbers in the string and returns their
//TODO:   sum.

function sumOfNumbers(str) {
  let resultSum = 0;
  arrayFromStr = str.split('');
  const newArray = [];
  let start = false;
  let num = '';
  for (let el of arrayFromStr) {
    if (parseInt(el) == el || el === '-') {
      start = true;
      num += el;
    } else {
      if (start === true) {
        newArray.push(num);
        num = '';
        start = false;
      }
    }
  }
  if (num.length > 0) {
    newArray.push(num);
  }
  for (let element of newArray) {
    resultSum += +element;
  }
  return resultSum;
}

console.log(
  `In case of “FwrtY45KHL120mn10P” the output will be: ${sumOfNumbers(
    'FwrtY45KHL120mn10P'
  )}`
);
console.log(
  `In case of “Wert12lop-12”  the output will be: ${sumOfNumbers(
    'Wert12lop-12'
  )}`
);
