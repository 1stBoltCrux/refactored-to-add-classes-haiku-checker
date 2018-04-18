import {Poem, syllableCount, inputToWordArray} from './../src/scripts.js'


describe('Test', function(){
  var poem;

  beforeEach(function(){
    poem = new Poem('I am first with five', 'Then seven in the middle', 'Five again to end')
  });

  it('should test whether poem contains non-alphabetical characters aside from ".", ",", and "\'" ', function(){
    let newPoem1 = poem.checkCharacters();
    console.log(newPoem1);
    expect(newPoem1).toEqual(true);
  });

  it('should test whether the poem has three lines', function(){
    let newPoem2 = poem.checkEmpty();
    console.log(newPoem2);
    expect(newPoem2).toEqual(true);
  });

  it('should test whether how many syllables a word contains', function(){
    let word = "enough";
    console.log(word);
    let syllables = syllableCount(word);
    expect(syllables).toEqual(2);
  });

  it('should test an entire phrase for a number of syllables', function (){
    let phrase = poem.line1;
    console.log(poem.line1);
    let lineTotalSyllables = inputToWordArray(phrase);
    expect(lineTotalSyllables).toEqual(5);
  });

  it('should test an entire haiku for correct number of syllables', function (){
    let output = poem.checkSyllablesOfEachLine();
    expect(output).toEqual(true);
  });
});
