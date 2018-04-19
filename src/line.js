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

  // checkEmpty() {
  //   if (this.line === ""){
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // inputToWordArray() {
  //   let total = 0;
  //   let wordArray = this.line.split(" ");
  //   for (var i = 0; i < wordArray.length; i++) {
  //     total += syllableCount(wordArray[i]);
  //   }
  //   console.log(total);
  //   return total;
  // }

}
