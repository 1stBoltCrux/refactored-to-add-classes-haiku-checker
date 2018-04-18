import {Poem} from './../src/scripts.js'

describe('Test', function(){
  var poem;

  beforeEach(function(){
    poem = new Poem('I am first with five', 'Then seven in the middle', 'Five again to end')
  });

  it('should test whether poem contains non-alphabetical characters aside from ".", ",", and "\'" ', function(){
    let line1 = poem.checkCharacters();
    console.log(line1);
    expect(line1).toEqual(true);
  });
});
