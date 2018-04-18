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
}
