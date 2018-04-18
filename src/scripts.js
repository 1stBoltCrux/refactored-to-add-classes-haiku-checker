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
      let sylabbleCountArray = [];
      let letters = string.split("");
      if (letters[letters.length - 1] === "e"){
        letters.pop();
      }
      if (letters[0].match(/[aeiou]/gi) !== null){
        sylabbleCountArray.push(letters[0];)
      }
      for (var i = 1; i < letters.length; i++) {
        if (letters[i].match(/[aeiouy]/gi) !== null && letters[i - 1].match(/[aeiouy]/gi) === null) {
          sylabbleCountArray.push(letters[i];);

        }
      }
    }
}
