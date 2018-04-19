import {Word} from "./word.js"

export class Line {
  constructor (line) {
    this.line = line;
  }

  checkCharacters() {
    console.log(this.line.match(/[^a-z.,' ]/gi));
    if (this.line.match(/[^a-z.,' ]/gi) === null) {
      return true;
    } else {
      return false;
    }
  }

  checkEmpty() {
    if (this.line === ""){
      return false
    } else {
      return true
    }
  }

  inputToWordArray() {
    let total = 0;
    let wordArray = this.line.split(" ");
    for (var i = 0; i < wordArray.length; i++) {
      let syllableCountArray = [];
      let word = new Word(wordArray[i]);
      total += word.leChecker();
      word.silentEChecker();
      word.silentEsChecker();
      total += word.firstVowelChecker();
      total += word.tionChecker();
      total += word.tcsiaChecker();
      total += word.diphthongChecker();
      total += word.nonSilentEChecker();
    }
    console.log(total);
    return total;
  }
}
