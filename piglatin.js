function pigLatin(sentence) {
  splitSen = sentence.split(" ");
  var results = [];

  splitSen.forEach(function(word) {
    newWord = pigLatinWord(word);
    results.push(newWord);
  });
  return results.join(" ");
}


function pigLatinWord(word) {
  if (startsWithVowel(word)) {
    return word + "-ay";
  } else {
    var newWord = word;
    var consonants = "";
    while(!startsWithVowel(newWord)) {
      if (newWord.charAt(0) === "s" && newWord.charAt(1) === "q" && newWord.charAt(2) === "u") {
        consonants = consonants.concat(newWord.charAt(0) + newWord.charAt(1) + newWord.charAt(2));
        newWord = newWord.slice(3);
      } else if (newWord.charAt(0) === "q" && newWord.charAt(1) === "u") {
        consonants = consonants.concat(newWord.charAt(0) + newWord.charAt(1));
        newWord = newWord.slice(2);
      } else {
        consonants = consonants.concat(newWord.charAt(0));
        newWord = newWord.slice(1);
      }
    }
    return newWord + "-" + consonants + "ay";
  }
}


function startsWithVowel(phrase) {
  var newString = phrase;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (i = 0; i <= vowels.length; i++) {
    if (newString.charAt(0) === vowels[i]) {
      return true;
    } else if (i === vowels.length) {
      return false;
    }
  }
}
