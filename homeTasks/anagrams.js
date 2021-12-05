//TODO: Given a word and a list of possible anagrams, select the correct sublist.

function anagramSublist(word, anagramArray) {
  const resultArray = [];
  word = word.split('');

  for (let anagram of anagramArray) {
    let indexArray = [];
    newAnagram = anagram.split('');

    for (let i = 0; i < word.length; i++) {
      let index = newAnagram.indexOf(word[i]);
      if (index >= 0) {
        indexArray.push(index);
        newAnagram.splice(index, 1);
      }
    }

    if (newAnagram.length === 0 && indexArray.length === word.length) {
      resultArray.push(anagram);
    }
  }

  return resultArray;
}

//? Testing the function with some word and array pairs
console.log(
  `In case of “listen”, ["enlists", "google", "inlets", "banana"] pair, the output will be : ${anagramSublist(
    'listen',
    ['enlists', 'google', 'inlets', 'banana']
  )}`
);
console.log(
  `In case of “pencil”, [“licnep”, “circular”, “pupil”, “nilcpe”, “leppnec”] pair, the output will be : ${anagramSublist(
    'pencil',
    ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']
  )}`
);
