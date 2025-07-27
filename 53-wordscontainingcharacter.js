var wordsContainingCharacter = function (words, x) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break; // No need to check further characters in this word
      }
    }
  }
  return res;
};


var wordsContainingCharacter = function (words, x) {
    let res = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
        res.push(i);
        }
    }
    return res;
}