import {Word} from "./../src/word.js"

describe('Test', function(){

  it('should test if a word ends with an e', function(){
    let word = new Word("one");
    console.log(word);
    let syllables = word.silentEChecker();
    expect(syllables).toEqual(0);
  });

  it('should test if a word ends with le', function(){
    let word = new Word("little");
    console.log(word);
    let syllables = word.leChecker();
    expect(syllables).toEqual(1);
  });

  it('should test if a word ends with an es', function(){
    let word = new Word("ones");
    console.log(word);
    let syllables = word.silentEsChecker();
    expect(syllables).toEqual(0);
  });

  it('should test if a word starts with a vowel', function(){
    let word = new Word("alps");
    console.log(word);
    let syllables = word.firstVowelChecker();
    expect(syllables).toEqual(1);
  });

  it('should test if a word contains a "tion" ', function(){
    let word = new Word("condition");
    console.log(word);
    let syllables = word.tionChecker();
    expect(syllables).toEqual(1);
  });

  it('should test if a word contains a "tia" or "cia" or "sia" ', function(){
    let word = new Word("asia");
    console.log(word);
    let syllables = word.tcsiaChecker();
    expect(syllables).toEqual(1);
  });

  it('should test if a word contains a diphthong ', function(){
    let word = new Word("houseboat");
    console.log(word);
    let syllables = word.diphthongChecker();
    expect(syllables).toEqual(3);
  });

  it('should test if a word contains an i + vowel', function(){
    let word = new Word("encyclopedia");
    console.log(word);
    let syllables = word.diphthongChecker();
    expect(syllables).toEqual(5);
  });

  it('should test if a word contains a y + vowel ', function(){
    let word = new Word("layer");
    console.log(word);
    let syllables = word.diphthongChecker();
    expect(syllables).toEqual(2);
  });

  it('should test if a word contains a non silent e', function(){
    let word = new Word("she");
    console.log(word);
    let syllables = word.silentEChecker();
    expect(syllables).toEqual(1);
  });

});
