//TODO: Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
//* -> If the phone number is less than 10 digits assume that it is a bad number
//* -> If the phone number is longer than 10, then it is a bad number
//* -> If the phone number is 10 digits assume that it is good
//* -> If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
//*     and return remaining 10 digits.
//* -> If the phone number contains + symbol more than one, consider it as a bad number.
//* -> If the phone number contains + symbol not as the first character, consider it as a badnumber.

function phoneNumberValidator(phoneNumber) {
  let startsWithPlus = false;
  if (phoneNumber.startsWith('+')) {
    startsWithPlus = true;
    phoneNumber = phoneNumber.substr(1);
  }
  if (phoneNumber.includes('+')) {
    return 'Bad number';
  }
  phoneNumber = phoneNumber.split('').filter(el => parseInt(el) == el);
  const arrLength = phoneNumber.length;
  if (arrLength === 10 && startsWithPlus) {
    return phoneNumber.join('');
  } else if (arrLength === 10) {
    return 'Good number';
  }
  return 'Bad number';
}

//? Testing for some phone numbers
console.log(
  `In case of “455678”  the output will be: ${phoneNumberValidator('455678')}`
);
console.log(
  `In case of “339 5656888”  the output will be: ${phoneNumberValidator(
    '339 5656888'
  )}`
);
console.log(
  `In case of “+0008989562”  the output will be: ${phoneNumberValidator(
    '+0008989562'
  )}`
);
console.log(
  `In case of “45231489562”  the output will be: ${phoneNumberValidator(
    '45231489562'
  )}`
);
console.log(
  `In case of “123+2356897452”  the output will be: ${phoneNumberValidator(
    '123+2356897452'
  )}`
);
