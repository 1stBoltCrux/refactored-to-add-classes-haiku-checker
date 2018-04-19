export class Word {
  constructor (word) {
    this.letters = word.split("");
  }

  leChecker() {
    let leArray = [];
    if (this.letters[this.letters.length - 1] === "e" && this.letters[this.letters.length - 2] === "l") {
      this.letters.splice(this.letters.length - 2, 2);
      console.log(this.letters);
      leArray.push("le");
    }
    return leArray.length;
  }

  silentEsChecker() {
    if (this.letters[this.letters.length - 1] === "s" && this.letters[this.letters.length - 2] === "e") {
      this.letters.splice(this.letters.length - 2, 2);
      console.log(this.letters);
    }
    return 0;
  }

  silentEChecker () {
    if (this.letters[this.letters.length - 1] === "e"){
      this.letters.pop();
      console.log(this.letters);
      if (this.letters.toString().match(/[aeiou]/gi) === null){
        return 1;
      } else {
        return 0;
      }
    }
  }

  firstVowelChecker() {
    let firstVowelArray = [];
    if (this.letters[0].match(/[aeiou]/gi) !== null){
      firstVowelArray.push(this.letters[0]);
    }
    return firstVowelArray.length;
  }
  tionChecker() {
    let tionArray = [];
    for (var j = 3; j < this.letters.length; j++) {
      if(this.letters[j] === "n" && this.letters[j - 1] === "o" && this.letters[j-2] === "i" && this.letters[j - 3] === "t") {
        this.letters.splice(j-3, 4);
        tionArray.push("tion");
      }
    }
    return tionArray.length;
  }

  tcsiaChecker() {
    let tcsiaArray = [];
    for (var k = 3; k < this.letters.length; k++) {
      if(this.letters[k] === "a" && this.letters[k - 1] === "i" && this.letters[k-2] === "c" || this.letters[k-2] === "s" || this.letters[k-2] === "t") {
        this.letters.splice(k-2, 3);
        tcsiaArray.push("tcsia");
      }
    }
    return tcsiaArray.length;
  }

  diphthongChecker() {
    let diphthongArray = [];
    for (var i = 1; i < this.letters.length; i++) {
      if (this.letters[i].match(/[aeiouy]/gi) !== null && this.letters[i - 1].match(/[aeou]/gi) === null) {
        diphthongArray.push(this.letters[i]);
      }
    }
    return diphthongArray.length;
  }
  
  nonSilentEChecker() {
    console.log(this.letters.toString());
    if(this.letters.toString().match(/[aeiou]/gi) === null) {
      return 1;
    } else {
      return 0;
    }
  }
}
