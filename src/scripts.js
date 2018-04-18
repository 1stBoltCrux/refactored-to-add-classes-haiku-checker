export class Poem {
  constructor (line1, line2, line3) {
      this.line1 = line1;
      this.line2 = line2;
      this.line3 = line3;
    }

    checkCharacters() {
      console.log(this.line1.match(/[^a-z.,' ]/gi));
      if (this.line1.match(/[^a-z.,' ]/gi) === null && this.line2.match(/[^a-z.,' ]/gi) === null && this.line3.match(/[^a-z.,' ]/gi) === null) {
        return true;
      } else {
        return false;
      }
    }

    checkEmpty() {
      if (this.line1 === "" || this.line2 === "" || this.line3 === ""){
        return false
      } else {
        return true
      }
    }

    syllableCount(string) {
      let syllableCountArray = [];
      let letters = string.split("");
      //to check for "le" ending and consider it as one syllable before reaching "silent e" cutter//
      if (letters[letters.length - 1] === "e" && letters[letters.length - 2] === "l") {
        letters.splice(letters.length - 2, 2);
        console.log(letters);
        syllableCountArray.push("le");
      }
      //silent "e" cutter//
      if (letters[letters.length - 1] === "e"){
        letters.pop();
      }
      //Check if word starts with vowel and consider it as one syllable//
      if (letters[0].match(/[aeiou]/gi) !== null){
        syllableCountArray.push(letters[0]);
      }
      //"tion" checker. Consider as single syllable//
      for (var j = 3; j < letters.length; j++) {
        if(letters[j] === "n" && letters[j - 1] === "o" && letters[j-2] === "i" && letters[j - 3] === "t") {
          letters.splice(j-3, 4);
          syllableCountArray.push("tion");
        }
      }
      //Diphthong checker. Consider double vowels as single syllable unless first vowel is "i" or "y"//
      for (var i = 1; i < letters.length; i++) {
        if (letters[i].match(/[aeiouy]/gi) !== null && letters[i - 1].match(/[aeou]/gi) === null) {
          syllableCountArray.push(letters[i]);
        } else if (letters[i].match(/[aeiouy]/gi) !== null && letters[i - 1].match(/[i]/gi) !== null) {
          syllableCountArray.push(letters[i], letters[i-1])
        }
      }
      console.log(syllableCountArray);
      let syllables = syllableCountArray.length;
      return syllableCountArray.length;
    }
}
